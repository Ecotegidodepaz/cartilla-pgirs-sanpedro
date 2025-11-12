
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationHeader from '@/components/navigation-header';
import AvatarGuide from '@/components/avatar-guide';
import InicioSection from '@/components/sections/inicio-section';
import DiagnosticoSection from '@/components/sections/diagnostico-section';
import EstrategiasSection from '@/components/sections/estrategias-section';
import ParticipacionSection from '@/components/sections/participacion-section';
import ContactoSection from '@/components/sections/contacto-section';

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('inicio');
  const [sectionText, setSectionText] = useState('');

  // Section text content for avatar narration
  const sectionTexts = {
    inicio: `Bienvenido al Plan de Gestión Integral de Residuos Sólidos de San Pedro, Valle del Cauca. Este plan para el período 2025-2036 busca transformar nuestro municipio hacia una economía circular sostenible. Con una generación de 3.18 toneladas diarias de residuos y un potencial del 66% en residuos orgánicos, nuestro objetivo es alcanzar el 80% de aprovechamiento para 2036, beneficiando a los 18,136 habitantes del municipio.`,
    
    diagnostico: `El diagnóstico técnico revela que San Pedro genera 3.18 toneladas diarias de residuos, con 0.413 kg por habitante al día. La composición muestra 66% orgánicos, 20% reciclables y 14% inservibles. Tenemos 100% de cobertura urbana y 98% de eficiencia en el recaudo, pero necesitamos fortalecer la cobertura rural y los programas de aprovechamiento.`,
    
    estrategias: `Nuestras estrategias se enfocan en cuatro líneas principales: aprovechamiento de residuos orgánicos mediante compostaje, inclusión social de 50 recicladores, educación ambiental para lograr 85% de separación en la fuente, y ampliación de cobertura rural a 95%. El plan se implementa en cuatro fases desde 2025 hasta 2036.`,
    
    participacion: `El PGIRS incluye cuatro programas estratégicos con un presupuesto de 11,143 millones de pesos. El programa de Cultura y Educación representa el 52.1%, seguido por Gestión de Residuos Orgánicos con 26.9%, Participación Ciudadana con 14.8%, e Inclusión de Recicladores con 10.8%. Cada programa tiene metas específicas y cronograma detallado.`,
    
    contacto: `Para más información sobre el PGIRS, puedes contactar la Alcaldía Municipal en la Secretaría de Planeación e Infraestructura, San Pedro Limpia E.S.P. para temas operativos, o la CVC como autoridad ambiental. Estamos disponibles de lunes a viernes de 8 AM a 5 PM para resolver tus consultas sobre el plan de residuos.`
  };

  // Detect current section based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentSection(sectionId);
          setSectionText(sectionTexts[sectionId as keyof typeof sectionTexts] || '');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['inicio', 'diagnostico', 'estrategias', 'participacion', 'contacto'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    setSectionText(sectionTexts[section as keyof typeof sectionTexts] || '');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <NavigationHeader 
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />

      {/* Main Content */}
      <main className="relative">
        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 font-medium">Cargando PGIRS San Pedro...</p>
          </div>
        </motion.div>

        {/* Sections */}
        <InicioSection />
        <DiagnosticoSection />
        <EstrategiasSection />
        <ParticipacionSection />
        <ContactoSection />

        {/* Avatar Guide - Presentación Profesional */}
        <AvatarGuide 
          currentSection={currentSection}
          onSpeakingChange={(speaking) => {
            // Callback opcional para detectar cuando está hablando
            console.log('Avatar hablando:', speaking);
          }}
          onSectionChange={(sectionId) => {
            // Navegar automáticamente cuando el avatar cambia de sección
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrentSection(sectionId);
          }}
        />

        {/* Floating Action Button for Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="fixed left-6 bottom-6 z-40"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-2">
            <div className="flex flex-col space-y-1">
              {[
                { id: 'inicio', label: 'Inicio', color: 'bg-blue-500' },
                { id: 'diagnostico', label: 'Diagnóstico', color: 'bg-green-500' },
                { id: 'estrategias', label: 'Estrategias', color: 'bg-purple-500' },
                { id: 'participacion', label: 'Participación', color: 'bg-orange-500' },
                { id: 'contacto', label: 'Contacto', color: 'bg-red-500' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSection === section.id 
                      ? `${section.color} scale-125` 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  title={section.label}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="fixed top-20 right-6 z-40"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-gray-700 capitalize">
                {currentSection}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Background Pattern Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </main>
    </div>
  );
}
