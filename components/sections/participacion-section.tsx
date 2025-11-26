
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Recycle, GraduationCap, Leaf, DollarSign, Calendar, Target } from 'lucide-react';

export default function ParticipacionSection() {
  const programs = [
    {
      title: 'Participación Ciudadana y Gobernanza',
      classification: 'Fortalecido',
      budget: '1,650',
      percentage: '14.8%',
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      icon: Users,
      description: 'Fortalecimiento de mecanismos de participación, control social y gobernanza ambiental',
      goals: [
        'Consejo Municipal de Reciclaje operativo',
        'Observatorio local con datos abiertos',
        '5 mesas temáticas activas',
        '50 promotores ambientales'
      ]
    },
    {
      title: 'Inclusión Social de Recicladores',
      classification: 'Continuidad Fortalecida',
      budget: '1,200',
      percentage: '10.8%',
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-50',
      icon: Recycle,
      description: 'Formalización e integración de ECORECUPERADORES en el sistema de gestión',
      goals: [
        '50 recicladores formalizados al 2036',
        'ECA operativa con dotación completa',
        'Registro ante SSPD',
        'Incremento 60% ingresos promedio'
      ]
    },
    {
      title: 'Cultura y Educación Ambiental',
      classification: 'Fortalecido',
      budget: '5,806',
      percentage: '52.1%',
      color: 'bg-purple-500',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50',
      icon: GraduationCap,
      description: 'Transformación de comportamientos ciudadanos mediante estrategias innovadoras',
      goals: [
        '85% de hogares separando en la fuente',
        '100% IE con PRAE fortalecido',
        'App "San Pedro Verde" con gamificación',
        '2,000 participantes/año en ecorrutas'
      ]
    },
    {
      title: 'Gestión de Residuos Orgánicos (PGARO)',
      classification: 'NUEVO',
      budget: '3,000',
      percentage: '26.9%',
      color: 'bg-orange-500',
      borderColor: 'border-orange-200',
      bgColor: 'bg-orange-50',
      icon: Leaf,
      description: 'Sistema integral para tratar el 80% de la fracción orgánica para 2036',
      goals: [
        '80% aprovechamiento orgánicos al 2036',
        'Planta de compostaje 50 ton/mes',
        '60% reducción disposición final',
        'Ingresos $60M/año por venta compost'
      ]
    }
  ];

  const timeline = [
    {
      year: '2025-2027',
      phase: 'Fortalecimiento',
      activities: [
        'Constitución Consejo Municipal',
        'Capacitación promotores ambientales',
        'Dotación EPP recicladores',
        'Pilotajes compostaje comunitario'
      ],
      color: 'bg-blue-400'
    },
    {
      year: '2027-2030',
      phase: 'Implementación',
      activities: [
        'Construcción planta compostaje',
        'ECA recicladores operativa',
        'Lanzamiento App San Pedro Verde',
        'Ampliación cobertura rural 90%'
      ],
      color: 'bg-green-400'
    },
    {
      year: '2030-2034',
      phase: 'Consolidación',
      activities: [
        'Optimización tecnológica',
        'Certificación compost',
        'Formalización 45 recicladores',
        '82% hogares separando'
      ],
      color: 'bg-purple-400'
    },
    {
      year: '2034-2036',
      phase: 'Sostenibilidad',
      activities: [
        'Modelo autosostenible',
        'Reconocimientos nacionales',
        '50 recicladores formalizados',
        'Transferencia a municipios'
      ],
      color: 'bg-orange-400'
    }
  ];

  return (
    <section id="participacion" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-6 py-2 mb-6">
            <Users className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">Programas de Participación</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Programas Estratégicos del PGIRS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuatro programas complementarios que abordan integralmente la gestión 
            de residuos desde un enfoque de economía circular, inclusión social 
            y participación ciudadana
          </p>
        </motion.div>

        {/* Budget Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Presupuesto Total PGIRS 2025-2036
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <DollarSign className="w-8 h-8 text-green-600" />
              <span className="text-4xl font-bold text-green-600">$11,656</span>
              <span className="text-xl text-gray-500">millones COP</span>
            </div>
            <p className="text-gray-600 mt-2">Escenario Moderado - Reducción 25% sin comprometer efectividad</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`${program.bgColor} rounded-lg p-4 border ${program.borderColor}`}
              >
                <div className="text-center">
                  <div className={`w-full h-2 ${program.color} rounded-full mb-3`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    ${program.budget}M
                  </div>
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    {program.percentage} del total
                  </div>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    program.classification === 'NUEVO' ? 'bg-orange-100 text-orange-800' :
                    program.classification === 'Fortalecido' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {program.classification}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Programs Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${program.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">${program.budget}M</span>
                      </div>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        program.classification === 'NUEVO' ? 'bg-orange-100 text-orange-800' :
                        program.classification === 'Fortalecido' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {program.classification}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{program.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Metas principales:</h4>
                  {program.goals.map((goal, goalIndex) => (
                    <div key={goalIndex} className="flex items-start space-x-2">
                      <Target className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{goal}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Cronograma de Implementación
          </h3>

          <div className="relative overflow-hidden">
            <div className="flex space-x-6 overflow-x-auto pb-6">
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 min-w-80 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 ${phase.color} rounded-full`} />
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="font-semibold text-gray-900">{phase.year}</span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {phase.phase}
                  </h4>

                  <ul className="space-y-2">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
