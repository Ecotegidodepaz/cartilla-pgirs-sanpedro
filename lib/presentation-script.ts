
/**
 * Script completo de presentación profesional del PGIRS San Pedro 2025-2036
 * Duración aproximada: 15-20 minutos
 * Estructura: 5 secciones alineadas con la navegación de la cartilla
 */

export interface PresentationSection {
  id: string;
  title: string;
  duration: string; // Duración aproximada
  segments: PresentationSegment[];
}

export interface PresentationSegment {
  text: string;
  action?: 'highlight' | 'scroll' | 'pause';
  target?: string; // ID del elemento a resaltar
  duration?: number; // Segundos de pausa
}

export const PRESENTATION_SCRIPT: PresentationSection[] = [
  {
    id: 'inicio',
    title: 'Bienvenida e Introducción',
    duration: '3 minutos',
    segments: [
      {
        text: 'Hola, bienvenidos. Mi nombre es ARIEL, y en los próximos minutos seré su guía en la presentación oficial del Plan de Gestión Integral de Residuos Sólidos del municipio de San Pedro, Valle del Cauca, con horizonte 2025 a 2036.',
        action: 'pause',
        duration: 1
      },
      {
        text: 'Este plan representa un compromiso institucional y comunitario para transformar la gestión de residuos en nuestro municipio, priorizando la economía circular, la inclusión social y la sostenibilidad ambiental.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'El PGIRS San Pedro 2025-2036 ha sido elaborado con la participación de tres entidades fundamentales:',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'La Alcaldía Municipal de San Pedro, a través de la Secretaría de Planeación e Infraestructura, como entidad territorial responsable.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'San Pedro Limpia S punto A punto E punto S punto P punto, como prestador del servicio público de aseo.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Y la Corporación Autónoma Regional del Valle del Cauca, CVC, como autoridad ambiental.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Como pueden ver en pantalla, San Pedro es un municipio con características muy especiales. Contamos con una población proyectada de 18 mil 136 habitantes, distribuidos en un 47% en zona urbana y un 53% en zona rural.',
        action: 'highlight',
        target: 'key-indicators',
        duration: 0.5
      },
      {
        text: 'Estamos ubicados en el corazón del Valle del Cauca, a 980 metros sobre el nivel del mar, con una temperatura promedio de 24 grados celsius, rodeados de cultivos de caña de azúcar y cerca del majestuoso río Cauca.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Este PGIRS no es solo un documento técnico. Es una hoja de ruta clara y ambiciosa que nos guiará durante los próximos 12 años hacia un modelo de gestión sostenible de residuos sólidos.',
        action: 'pause',
        duration: 1
      }
    ]
  },
  {
    id: 'diagnostico',
    title: 'Diagnóstico y Situación Actual',
    duration: '5 minutos',
    segments: [
      {
        text: 'Ahora vamos a profundizar en el diagnóstico técnico que sustenta este plan. Es fundamental conocer nuestra situación actual para entender hacia dónde nos dirigimos.',
        action: 'scroll',
        target: 'diagnostico'
      },
      {
        text: 'Actualmente, en San Pedro generamos aproximadamente 3 punto 18 toneladas de residuos sólidos cada día. Esto equivale a una producción per cápita de 0 punto 413 kilogramos por habitante al día.',
        action: 'highlight',
        target: 'waste-stats',
        duration: 0.5
      },
      {
        text: 'Durante el año 2024, registramos un total de 2 mil 735 toneladas de residuos dispuestos en el Relleno Sanitario Regional Presidente, ubicado a 5 punto 5 kilómetros de nuestro casco urbano.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Como pueden observar en el gráfico de composición de residuos, aquí está nuestra GRAN OPORTUNIDAD:',
        action: 'highlight',
        target: 'waste-composition-chart',
        duration: 0.5
      },
      {
        text: 'El 66% de nuestros residuos son orgánicos. Eso significa más de 2 toneladas diarias de residuos biodegradables que actualmente van al relleno sanitario, pero que pueden transformarse en compost de alta calidad.',
        action: 'pause',
        duration: 1
      },
      {
        text: 'El 20% son materiales reciclables como plástico, papel, cartón, vidrio y metales. Y solo el 14% son residuos verdaderamente inservibles.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Esto significa que el 86% de lo que actualmente disponemos en el relleno sanitario tiene potencial de aprovechamiento. Esta es la base de nuestra estrategia.',
        action: 'pause',
        duration: 1
      },
      {
        text: 'En el gráfico de generación mensual pueden ver cómo varían nuestros volúmenes de residuos a lo largo del año, con picos en noviembre que llegan a 301 toneladas mensuales.',
        action: 'highlight',
        target: 'monthly-waste-chart',
        duration: 0.5
      },
      {
        text: 'Actualmente, tenemos una cobertura del 100% en la zona urbana, lo cual es excelente. Sin embargo, en la zona rural plana nuestra cobertura oscila entre 60 y 75%, por lo que uno de nuestros objetivos es ampliar este servicio.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'El análisis DOFA nos muestra con claridad nuestras fortalezas y desafíos. Entre las fortalezas destacan: cobertura urbana del 100%, alta eficiencia de recaudo del 98%, y un alto potencial de aprovechamiento.',
        action: 'highlight',
        target: 'dofa-analysis',
        duration: 0.5
      },
      {
        text: 'Sin embargo, enfrentamos debilidades como la ausencia de programas estructurados de aprovechamiento, educación ambiental insuficiente, y falta de separación en la fuente generalizada.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Pero también identificamos grandes oportunidades: el alto potencial aprovechable del 86%, normatividad favorable a economía circular, posibilidad de cofinanciación, mercados locales para compost y reciclables, y tecnologías accesibles.',
        action: 'pause',
        duration: 1
      }
    ]
  },
  {
    id: 'estrategias',
    title: 'Estrategias y Metas 2025-2036',
    duration: '5 minutos',
    segments: [
      {
        text: 'Ahora vamos a conocer las estrategias y metas que nos llevarán a transformar la gestión de residuos en San Pedro.',
        action: 'scroll',
        target: 'estrategias'
      },
      {
        text: 'Este PGIRS representa la actualización y fortalecimiento del plan anterior, adoptado mediante Decreto Municipal 158 del 20 de diciembre de 2021.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'La actualización responde a la necesidad de ajustar nuestras estrategias a las dinámicas actuales, en el marco de la economía circular y el desarrollo sostenible.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Hemos identificado cinco retos principales que debemos abordar:',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Primero: Aprovechamiento de residuos orgánicos. Con ese 66% de fracción orgánica, es imperativo implementar sistemas de compostaje y biodigestión que generen productos de valor agregado.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Segundo: Inclusión social de recicladores. La asociación ECORECUPERADORES requiere fortalecimiento organizacional, infraestructura propia y formalización ante la SSPD.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Tercero: Educación ambiental intensiva para lograr la separación en la fuente en al menos el 70% de los hogares al 2030 y el 85% al 2036.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Cuarto: Ampliación de cobertura rural, garantizando acceso al servicio en la totalidad de la zona rural plana.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Y quinto: Sostenibilidad financiera, optimizando costos y diversificando fuentes de financiación.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Nuestras metas para el 2036 son ambiciosas pero alcanzables:',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Lograr el 80% de aprovechamiento de residuos orgánicos mediante el Programa PGARO, nuestro programa estrella.',
        action: 'highlight',
        target: 'meta-organicos',
        duration: 0.5
      },
      {
        text: 'Alcanzar el 85% de hogares realizando separación en la fuente de manera correcta.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Reducir en un 60% la disposición final de residuos en el relleno sanitario.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Formalizar a 50 recicladores con seguridad social y mejores condiciones laborales.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Y ampliar la cobertura rural del 60-75% actual al 95% en 2036.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'El plan se implementará en cuatro fases estratégicas:',
        action: 'highlight',
        target: 'implementation-phases',
        duration: 0.3
      },
      {
        text: 'Fase 1, de 2025 a 2027: Fortalecimiento institucional, capacitaciones y pilotajes.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Fase 2, de 2027 a 2030: Implementación de infraestructura clave, planta de compostaje y ECA de recicladores.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Fase 3, de 2030 a 2034: Consolidación y optimización tecnológica.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Y Fase 4, de 2034 a 2036: Sostenibilidad plena y replicabilidad del modelo.',
        action: 'pause',
        duration: 1
      }
    ]
  },
  {
    id: 'participacion',
    title: 'Programas Estratégicos y Presupuesto',
    duration: '5 minutos',
    segments: [
      {
        text: 'Ahora vamos a conocer en detalle los cuatro programas estratégicos que componen este PGIRS, y la inversión necesaria para hacerlos realidad.',
        action: 'scroll',
        target: 'participacion'
      },
      {
        text: 'El presupuesto total del PGIRS en su escenario moderado es de 11 mil 656 millones de pesos para el periodo 2025 a 2036.',
        action: 'highlight',
        target: 'budget-summary',
        duration: 0.5
      },
      {
        text: 'Este presupuesto se distribuye en cuatro programas complementarios:',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'Programa número 1: Participación Ciudadana y Gobernanza Ambiental. Es un programa FORTALECIDO con un presupuesto de mil 650 millones de pesos, que representa el 14 punto 8% del total.',action: 'highlight',
        target: 'programa-gobernanza',
        duration: 0.5
      },
      {
        text: 'Este programa creará mecanismos de participación, control social y gobernanza ambiental, incluyendo el Consejo Municipal de Reciclaje, mesas temáticas y un observatorio local de residuos con datos abiertos.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Programa número 2: Inclusión Social de Recicladores. Es un programa de CONTINUIDAD FORTALECIDA con mil 200 millones de pesos, el 10 punto 8% del presupuesto.',
        action: 'highlight',
        target: 'programa-recicladores',
        duration: 0.5
      },
      {
        text: 'Formalizaremos a 50 recicladores para el 2036, dotaremos una Estación de Clasificación y Aprovechamiento, integraremos rutas selectivas y estableceremos acuerdos comerciales estables.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Los recicladores pasarán de ingresos informales a ingresos formales de un salario minimo legal vigente para el año 2036, con seguridad social y condiciones dignas de trabajo.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Programa número 3: Cultura y Educación Ambiental Innovadora. Este es nuestro programa FORTALECIDO de mayor inversión: 5 mil 806 millones de pesos, el 52 punto 1% del presupuesto total.',
        action: 'highlight',
        target: 'programa-educacion',
        duration: 0.5
      },
      {
        text: '¿Por qué invertimos tanto en educación? Porque el cambio de comportamiento es la base del éxito de todos los demás programas. Sin separación en la fuente por parte de los ciudadanos, no hay aprovechamiento posible.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Implementaremos estrategias innovadoras como: Ecorrutas vivenciales, una app móvil "San Pedro Verde" con gamificación, fortalecimiento de proyectos ambientales escolares en todas las instituciones educativas, campañas masivas en radio y redes sociales, y talleres comunitarios barrio por barrio.',
        action: 'pause',
        duration: 1
      },
      {
        text: 'Y programa número 4: Gestión y Aprovechamiento de Residuos Orgánicos, PGARO. Este es nuestro programa NUEVO, el pilar estratégico central del plan, con 3 mil millones de pesos, el 26 punto 9% del presupuesto.',
        action: 'highlight',
        target: 'programa-organicos',
        duration: 0.5
      },
      {
        text: 'El PGARO construirá y operará una planta de compostaje modular que procesará hasta 50 toneladas de compost al mes para el año 2036.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Esto nos permitirá reducir en un 60% la disposición final, disminuir lixiviados y emisiones de gases de efecto invernadero, producir compost certificado de alta calidad, y generar ingresos estimados de 50 a 80 millones de pesos anuales desde el año 2030.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'El periodo 2028 a 2031, que coincide con la próxima administración municipal, es CRÍTICO. Durante estos cuatro años se alcanzará el punto de equilibrio operativo y se consolidará la infraestructura clave.',
        action: 'highlight',
        target: 'periodo-critico',
        duration: 0.5
      },
      {
        text: 'La financiación provendrá de múltiples fuentes: 45 a 50% de tarifas del servicio de aseo, 25 a 30% de recursos municipales, 8 a 12% de cofinanciación con CVC y entidades nacionales, y el resto de alianzas público-privadas e ingresos por aprovechamiento.',
        action: 'pause',
        duration: 1
      }
    ]
  },
  {
    id: 'contacto',
    title: 'Conclusiones y Llamado a la Acción',
    duration: '2 minutos',
    segments: [
      {
        text: 'Estamos llegando al final de esta presentación. Permítanme compartirles las conclusiones más importantes.',
        action: 'scroll',
        target: 'contacto'
      },
      {
        text: 'El PGIRS San Pedro 2025-2036 representa mucho más que un plan técnico. Es un compromiso de todos los sectores de nuestro municipio con el futuro de nuestro territorio.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Nuestro 66% de residuos orgánicos es la principal oportunidad, y el programa PGARO es el eje central para aprovecharla.',
        action: 'pause',
        duration: 0.3
      },
      {
        text: 'El escenario moderado de 11 mil 143 millones de pesos es técnicamente viable y financieramente sostenible, con retornos claros en ahorro de disposición final e ingresos por aprovechamiento.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'La inclusión de recicladores y la gobernanza participativa garantizan la legitimidad social del plan. Este no es un plan impuesto, es un plan construido con la comunidad.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Las metas al 2036 son ambiciosas: 80% de aprovechamiento, 85% de separación en la fuente, 60% de reducción en disposición final. Pero son ALCANZABLES si trabajamos todos juntos.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Este plan será adoptado oficialmente mediante Decreto Municipal en el último trimestre de 2025, y contará con presupuesto plurianual que garantiza continuidad entre administraciones.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Ahora los invito a todos a ser parte activa de este cambio. Cada ciudadano, cada familia, cada empresa, cada institución educativa tiene un rol fundamental.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Pueden contactar con la Alcaldía Municipal, con San Pedro Limpia, o con la CVC para más información, participar en las mesas de trabajo, o unirse como veedores ciudadanos.',
        action: 'highlight',
        target: 'contact-cards',
        duration: 0.5
      },
      {
        text: 'Juntos vamos a construir un San Pedro más limpio, más verde, más sostenible. Un San Pedro que aprovecha sus residuos, valora a sus recicladores, educa a sus niños y cuida su ambiente.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'Muchas gracias por su atención. Los invito a explorar con detalle cada sección de esta cartilla digital interactiva, donde encontrarán toda la información técnica, estadísticas, presupuestos y cronogramas completos.',
        action: 'pause',
        duration: 0.5
      },
      {
        text: 'San Pedro limpio, San Pedro sostenible. ¡Hagámoslo realidad juntos! Hasta pronto.',
        action: 'pause',
        duration: 2
      }
    ]
  }
];

// Calcula la duración total estimada de la presentación
export const getTotalDuration = (): number => {
  return PRESENTATION_SCRIPT.reduce((total, section) => {
    const sectionDuration = section.segments.reduce((segTotal, segment) => {
      // Aproximadamente 3 palabras por segundo
      const wordCount = segment.text.split(' ').length;
      const speakingTime = wordCount / 2.8; // Velocidad natural de habla
      const pauseTime = segment.duration || 0;
      return segTotal + speakingTime + pauseTime;
    }, 0);
    return total + sectionDuration;
  }, 0);
};

// Retorna el script formateado para una sección específica
export const getScriptForSection = (sectionId: string): string => {
  const section = PRESENTATION_SCRIPT.find(s => s.id === sectionId);
  if (!section) return '';
  
  return section.segments.map(seg => seg.text).join(' ');
};

// Retorna todos los segmentos de todas las secciones en orden
export const getAllSegments = (): Array<PresentationSegment & { sectionId: string }> => {
  return PRESENTATION_SCRIPT.flatMap(section =>
    section.segments.map(segment => ({
      ...segment,
      sectionId: section.id
    }))
  );
};
