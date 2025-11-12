
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, 
  Minimize2, Download, StopCircle
} from 'lucide-react';
import { 
  PRESENTATION_SCRIPT, 
  getAllSegments 
} from '@/lib/presentation-script';

interface AvatarGuideProps {
  currentSection: string;
  onSpeakingChange?: (speaking: boolean) => void;
  onSectionChange?: (sectionId: string) => void;
}

export default function AvatarGuide({ 
  currentSection, 
  onSpeakingChange,
  onSectionChange 
}: AvatarGuideProps) {
  // Estado de reproducción
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Configuración de reproducción
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);

  // Progreso de la presentación
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  // Visualización de audio
  const [audioLevel, setAudioLevel] = useState(0);

  // Referencias
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const allSegments = useRef(getAllSegments());
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Inicializar voces
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Función para simular nivel de audio durante la reproducción
  const simulateAudioLevel = () => {
    if (!isPlaying || isPaused) {
      setAudioLevel(0);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    // Simulación de nivel de audio con variación natural
    const baseLevel = 0.5;
    const variation = Math.random() * 0.5;
    const newLevel = Math.min(1, baseLevel + variation);
    
    setAudioLevel(newLevel);
    animationFrameRef.current = requestAnimationFrame(simulateAudioLevel);
  };

  useEffect(() => {
    if (isPlaying && !isPaused) {
      simulateAudioLevel();
    } else {
      setAudioLevel(0);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, isPaused]);

  // Función para reproducir un segmento
  const speakSegment = (segmentIndex: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    // Detener cualquier reproducción anterior
    window.speechSynthesis.cancel();

    if (segmentIndex >= allSegments.current.length) {
      // Fin de la presentación
      setIsPlaying(false);
      setProgress(100);
      onSpeakingChange?.(false);
      return;
    }

    const segment = allSegments.current[segmentIndex];

    // Navegar a la sección correspondiente
    if (segment.sectionId !== currentSection && onSectionChange) {
      onSectionChange(segment.sectionId);
    }

    // Actualizar subtítulos
    setCurrentSubtitle(segment.text);

    // Crear utterance con voz MASCULINA profesional con acento colombiano
    const utterance = new SpeechSynthesisUtterance(segment.text);
    utterance.lang = 'es-CO'; // Español colombiano
    utterance.rate = playbackRate * 1.2; // Velocidad DINÁMICA y con más ritmo
    utterance.pitch = 0.8; // Pitch masculino con ENERGÍA
    utterance.volume = isMuted ? 0 : volume; // Volumen completo

    // Selección prioritaria de voz masculina en español colombiano
    const voices = window.speechSynthesis.getVoices();
    
    // Prioridad 1: Voces colombianas masculinas
    let selectedVoice = voices.find(v => 
      v.lang === 'es-CO' && (
        v.name.toLowerCase().includes('male') || 
        v.name.toLowerCase().includes('hombre') ||
        v.name.toLowerCase().includes('man')
      )
    );
    
    // Prioridad 2: Voces latinoamericanas masculinas (acento similar al colombiano)
    if (!selectedVoice) {
      selectedVoice = voices.find(v => 
        (v.lang === 'es-MX' || v.lang === 'es-AR' || v.lang === 'es-VE') && (
          v.name.toLowerCase().includes('male') || 
          v.name.toLowerCase().includes('man') ||
          v.name.toLowerCase().includes('hombre') ||
          v.name.toLowerCase().includes('jorge') ||
          v.name.toLowerCase().includes('diego') ||
          v.name.toLowerCase().includes('carlos') ||
          v.name.toLowerCase().includes('juan')
        )
      );
    }
    
    // Prioridad 3: Cualquier voz española masculina
    if (!selectedVoice) {
      selectedVoice = voices.find(v => 
        v.lang.startsWith('es') && (
          v.name.toLowerCase().includes('male') || 
          v.name.toLowerCase().includes('man') ||
          v.name.toLowerCase().includes('hombre')
        )
      );
    }
    
    // Prioridad 4: Cualquier voz española (el pitch bajo hará el trabajo)
    if (!selectedVoice) {
      selectedVoice = voices.find(v => v.lang.startsWith('es'));
    }
    
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      console.log('✓ Voz masculina seleccionada:', selectedVoice.name, selectedVoice.lang, `pitch: ${utterance.pitch}`);
    } else {
      console.warn('⚠ No se encontró voz en español, usando voz predeterminada con pitch bajo');
    }

    utterance.onstart = () => {
      onSpeakingChange?.(true);
    };

    utterance.onend = () => {
      onSpeakingChange?.(false);
      
      // Esperar la duración de pausa especificada
      const pauseDuration = (segment.duration || 0) * 1000;
      
      setTimeout(() => {
        if (!isPaused) {
          const nextIndex = segmentIndex + 1;
          setCurrentSegmentIndex(nextIndex);
          
          // Actualizar progreso
          const newProgress = (nextIndex / allSegments.current.length) * 100;
          setProgress(newProgress);
          
          // Verificar si es el último segmento
          if (nextIndex >= allSegments.current.length) {
            // Finalizar presentación
            console.log('✓ Presentación completa finalizada');
            
            // Si estamos grabando, detener la grabación automáticamente
            if (isRecording && mediaRecorderRef.current) {
              setTimeout(() => {
                console.log('✓ Deteniendo grabación automáticamente...');
                stopRecording();
              }, 2000); // Esperar 2 segundos después del último segmento
            }
            
            // Detener la reproducción
            handleStop();
            return;
          }
          
          // Reproducir siguiente segmento
          speakSegment(nextIndex);
        }
      }, pauseDuration);
    };

    utterance.onerror = (event) => {
      console.error('Error en síntesis de voz:', event);
      onSpeakingChange?.(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // Controles de reproducción
  const handlePlay = () => {
    if (isPaused) {
      setIsPaused(false);
      window.speechSynthesis.resume();
    } else {
      setIsPlaying(true);
      setIsPaused(false);
      speakSegment(currentSegmentIndex);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    window.speechSynthesis.pause();
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentSegmentIndex(0);
    setProgress(0);
    setCurrentSubtitle('');
    window.speechSynthesis.cancel();
    onSpeakingChange?.(false);
  };

  const handleNext = () => {
    window.speechSynthesis.cancel();
    const nextIndex = Math.min(currentSegmentIndex + 1, allSegments.current.length - 1);
    setCurrentSegmentIndex(nextIndex);
    setProgress((nextIndex / allSegments.current.length) * 100);
    if (isPlaying && !isPaused) {
      speakSegment(nextIndex);
    }
  };

  const handlePrevious = () => {
    window.speechSynthesis.cancel();
    const prevIndex = Math.max(currentSegmentIndex - 1, 0);
    setCurrentSegmentIndex(prevIndex);
    setProgress((prevIndex / allSegments.current.length) * 100);
    if (isPlaying && !isPaused) {
      speakSegment(prevIndex);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (utteranceRef.current) {
      utteranceRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (utteranceRef.current) {
      utteranceRef.current.volume = !isMuted ? 0 : volume;
    }
  };

  // Funcionalidad de grabación de video
  const startRecording = async () => {
    try {
      // Solicitar captura de pantalla
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: 'browser',
          width: 1920,
          height: 1080,
          frameRate: 30
        },
        audio: false
      });

      // Crear MediaRecorder
      const options = {
        mimeType: 'video/webm;codecs=vp9',
        videoBitsPerSecond: 5000000
      };

      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      recordedChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `PGIRS_SanPedro_${new Date().toISOString().split('T')[0]}.webm`;
        a.click();
        URL.revokeObjectURL(url);
        
        // Detener todos los tracks del stream
        stream.getTracks().forEach(track => track.stop());
        setIsRecording(false);
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Iniciar reproducción automáticamente
      if (!isPlaying) {
        handlePlay();
      }

    } catch (error) {
      console.error('Error al iniciar grabación:', error);
      alert('No se pudo iniciar la grabación. Por favor, permite el acceso a la pantalla.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      handleStop();
    }
  };

  // Funcionalidad NUEVA: Generar video completo automáticamente
  const startFullVideoRecording = async () => {
    try {
      // Confirmar con el usuario
      const confirmed = confirm(
        '🎬 Esto generará el video COMPLETO de la cartilla (15-17 minutos).\n\n' +
        '✓ Se grabará automáticamente toda la presentación\n' +
        '✓ Navegará por todas las secciones\n' +
        '✓ Incluirá el audio de Carlos y el visualizador\n' +
        '✓ Al finalizar, descargará el video automáticamente\n\n' +
        '¿Deseas continuar?'
      );

      if (!confirmed) return;

      // Reiniciar la presentación desde el inicio
      setCurrentSegmentIndex(0);
      setProgress(0);
      setIsPlaying(false);
      setIsPaused(false);
      window.speechSynthesis.cancel();

      // Esperar un momento para que el estado se actualice
      await new Promise(resolve => setTimeout(resolve, 500));

      // Solicitar captura de pantalla
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: 'browser',
          width: 1920,
          height: 1080,
          frameRate: 30
        },
        audio: true // Capturar audio del sistema
      });

      // Crear MediaRecorder con mejor calidad para video largo
      const options = {
        mimeType: 'video/webm;codecs=vp9',
        videoBitsPerSecond: 8000000 // Mayor calidad para video largo
      };

      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      recordedChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Cartilla_PGIRS_SanPedro_Completa_${new Date().toISOString().split('T')[0]}.webm`;
        a.click();
        URL.revokeObjectURL(url);
        
        // Detener todos los tracks del stream
        stream.getTracks().forEach(track => track.stop());
        setIsRecording(false);

        alert(
          '✅ ¡Video completo generado exitosamente!\n\n' +
          'El archivo se ha descargado automáticamente.\n' +
          'Duración: 15-17 minutos\n' +
          'Formato: WebM (compatible con YouTube)'
        );
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Iniciar reproducción desde el principio
      setIsPlaying(true);
      setIsPaused(false);
      speakSegment(0);

      alert(
        '🎬 Grabación iniciada\n\n' +
        '⏱️  Duración estimada: 15-17 minutos\n' +
        '📹 La presentación se reproducirá automáticamente\n' +
        '💾 El video se descargará al finalizar\n\n' +
        '¡No cierres esta ventana hasta que termine!'
      );

    } catch (error) {
      console.error('Error al iniciar grabación completa:', error);
      alert('No se pudo iniciar la grabación. Por favor, permite el acceso a la pantalla y el audio.');
    }
  };

  // Limpiar al desmontar
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (isMinimized) {
    return (
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-2xl flex items-center justify-center cursor-pointer"
        onClick={() => setIsMinimized(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Volume2 className="w-8 h-8 text-white" />
      </motion.button>
    );
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Contenedor del visualizador circular */}
      <div className="relative">
        {/* Círculo visualizador de audio */}
        <motion.div
          className="w-32 h-32 rounded-full relative"
          animate={{
            boxShadow: isPlaying && !isPaused
              ? [
                  `0 0 20px rgba(34, 197, 94, ${audioLevel * 0.5})`,
                  `0 0 60px rgba(34, 197, 94, ${audioLevel})`,
                  `0 0 20px rgba(34, 197, 94, ${audioLevel * 0.5})`
                ]
              : '0 0 20px rgba(34, 197, 94, 0.2)'
          }}
          transition={{
            duration: 0.3,
            repeat: isPlaying && !isPaused ? Infinity : 0,
            repeatType: 'reverse'
          }}
        >
          {/* Círculo exterior (progreso) */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={377}
              strokeDashoffset={377 - (377 * progress) / 100}
              transition={{ duration: 0.3 }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>
          </svg>

          {/* Círculo interior animado (intensidad de audio) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: isPlaying && !isPaused ? 1 + audioLevel * 0.3 : 1
            }}
            transition={{ duration: 0.1 }}
          >
            <div 
              className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center"
              style={{
                boxShadow: `inset 0 0 20px rgba(255, 255, 255, ${audioLevel * 0.3})`
              }}
            >
              {/* Ondas de audio */}
              <div className="flex gap-1 items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-white rounded-full"
                    animate={{
                      height: isPlaying && !isPaused
                        ? [8, 20 + audioLevel * 20, 8]
                        : 8
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: isPlaying && !isPaused ? Infinity : 0,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Indicador de grabación */}
          {isRecording && (
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>
          )}
        </motion.div>

        {/* Controles */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute -left-44 bottom-0 bg-black/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-h-96 overflow-y-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {/* Controles principales */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevious}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    disabled={currentSegmentIndex === 0}
                  >
                    <SkipBack className="w-4 h-4 text-white" />
                  </button>
                  
                  {!isPlaying || isPaused ? (
                    <button
                      onClick={handlePlay}
                      className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors"
                    >
                      <Play className="w-5 h-5 text-white fill-white" />
                    </button>
                  ) : (
                    <button
                      onClick={handlePause}
                      className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors"
                    >
                      <Pause className="w-5 h-5 text-white" />
                    </button>
                  )}
                  
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    disabled={currentSegmentIndex >= allSegments.current.length - 1}
                  >
                    <SkipForward className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Controles adicionales */}
                <div className="flex gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                  
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <Minimize2 className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Controles de grabación */}
                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                  {/* Botón principal: Video Completo Automático */}
                  {!isRecording ? (
                    <button
                      onClick={startFullVideoRecording}
                      className="w-full h-10 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 flex items-center justify-center gap-2 transition-all shadow-lg"
                      title="Generar video completo automáticamente (15-17 min)"
                    >
                      <Download className="w-4 h-4 text-white" />
                      <span className="text-xs text-white font-bold">Video Completo (15-17 min)</span>
                    </button>
                  ) : (
                    <button
                      onClick={stopRecording}
                      className="w-full h-10 rounded-lg bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2 transition-colors animate-pulse"
                      title="Detener grabación"
                    >
                      <StopCircle className="w-4 h-4 text-white" />
                      <span className="text-xs text-white font-bold">Detener Grabación</span>
                    </button>
                  )}
                  
                  {/* Botón secundario: Grabación manual */}
                  {!isRecording && (
                    <button
                      onClick={startRecording}
                      className="w-full h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center gap-2 transition-colors"
                      title="Grabar manualmente desde aquí"
                    >
                      <Download className="w-3 h-3 text-white/80" />
                      <span className="text-xs text-white/80 font-medium">Grabar Manual</span>
                    </button>
                  )}
                </div>

                {/* Progreso */}
                <div className="text-center pt-2 border-t border-white/10">
                  <div className="text-xs text-white/60">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-xs text-white/40 mt-1">
                    {currentSegmentIndex + 1} / {allSegments.current.length}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  );
}
