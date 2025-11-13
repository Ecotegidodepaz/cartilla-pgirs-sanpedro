
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, TrendingUp, Award, Users, Recycle } from 'lucide-react';

export default function EstrategiasSection() {
  const strategicGoals = [
    {
      year: '2027',
      organicWaste: 30,
      separation: 55,
      coverage: 80,
      recyclers: 20,
      color: 'bg-blue-500'
    },
    {
      year: '2030',
      organicWaste: 50,
      separation: 70,
      coverage: 90,
      recyclers: 32,
      color: 'bg-green-500'
    },
    {
      year: '2033',
      organicWaste: 70,
      separation: 82,
      coverage: 93,
      recyclers: 45,
      color: 'bg-purple-500'
    },
    {
      year: '2036',
      organicWaste: 80,
      separation: 85,
      coverage: 95,
      recyclers: 50,
      color: 'bg-orange-500'
    }
  ];

  const strategicLines = [
    {
      title: 'Aprovechamiento de Residuos Orgánicos',
      description: 'Implementar sistemas de compostaje y biodigestión para aprovechar el 66% de la fracción orgánica',
      icon: Recycle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      target: '80% aprovechamiento 2036'
    },
    {
      title: 'Inclusión Social de Recicladores',
      description: 'Fortalecer ECORECUPERADORES con infraestructura, formalización SSPD y mejores ingresos',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      target: '50 recicladores formalizados'
    },
    {
      title: 'Educación Ambiental',
      description: 'Campañas intensivas para lograr separación en la fuente y cambio de comportamiento',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      target: '85% hogares separando'
    },
    {
      title: 'Ampliación de Cobertura Rural',
      description: 'Garantizar acceso al servicio de aseo en la totalidad de la zona rural plana',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      target: '95% cobertura rural'
    }
  ];

  const phases = [
    {
      name: 'Fortalecimiento',
      period: '2025-2027',
      description: 'Institucionalidad, capacitación, dotación y pilotajes',
      progress: 25,
      color: 'bg-blue-500'
    },
    {
      name: 'Implementación',
      period: '2027-2030',
      description: 'Infraestructura, ampliación cobertura, escalamiento educación',
      progress: 50,
      color: 'bg-green-500'
    },
    {
      name: 'Consolidación',
      period: '2030-2034',
      description: 'Optimización tecnológica, certificaciones, mejora continua',
      progress: 75,
      color: 'bg-purple-500'
    },
    {
      name: 'Sostenibilidad',
      period: '2034-2036',
      description: 'Modelo maduro, replicabilidad, reconocimientos',
      progress: 100,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section 
      id="estrategias" 
      className="min-h-screen py-20 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url(/background-environmental.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-6 py-2 mb-6">
            <Target className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">Líneas Estratégicas</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Estrategias y Metas 2025-2036
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformación hacia una economía circular sostenible con enfoque 
            en aprovechamiento, inclusión social y participación ciudadana
          </p>
        </motion.div>

        {/* Strategic Lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {strategicLines.map((line, index) => {
            const Icon = line.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${line.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${line.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {line.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {line.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
                      <Target className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">{line.target}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Metas Temporales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Metas por Período
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-6">
            {strategicGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-full h-2 ${goal.color} rounded-full mb-4`} />
                
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-lg font-bold text-gray-900">{goal.year}</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Orgánicos</span>
                      <span className="text-sm font-semibold text-green-600">{goal.organicWaste}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.organicWaste}%` }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                        className="bg-green-500 h-1.5 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Separación</span>
                      <span className="text-sm font-semibold text-blue-600">{goal.separation}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.separation}%` }}
                        transition={{ delay: 1.4 + index * 0.1, duration: 1 }}
                        className="bg-blue-500 h-1.5 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Cobertura</span>
                      <span className="text-sm font-semibold text-purple-600">{goal.coverage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.coverage}%` }}
                        transition={{ delay: 1.6 + index * 0.1, duration: 1 }}
                        className="bg-purple-500 h-1.5 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Recicladores</span>
                      <span className="text-lg font-bold text-orange-600">{goal.recyclers}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fases de Implementación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Fases de Implementación
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 lg:left-1/2 lg:-ml-px" />
            
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-3 h-3 bg-white border-2 border-gray-400 rounded-full lg:left-1/2 lg:-ml-1.5">
                    <div className={`w-full h-full rounded-full ${phase.color} opacity-75`} />
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 ml-12 lg:ml-0 lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                  }`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-lg font-bold text-gray-900">{phase.name}</span>
                      <span className="text-sm text-gray-500">{phase.period}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${phase.progress}%` }}
                          transition={{ delay: 1.8 + index * 0.1, duration: 1.2 }}
                          className={`h-2 rounded-full ${phase.color}`}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{phase.progress}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
