'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Leaf } from 'lucide-react';
import Image from 'next/image';
import KeyIndicators from '@/components/charts/key-indicators';

export default function InicioSection() {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/background-hero.png)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Leaf className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">PGIRS 2025-2036</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
                Plan de Gestión Integral de
                <br />
                <span className="text-green-400">Residuos Sólidos</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                San Pedro, Valle del Cauca
                <br />
                Hacia una economía circular sostenible
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Período 2025-2036</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>San Pedro, Valle del Cauca</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <span>18,136 habitantes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Indicators Section */}
      <div className="relative z-10 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <KeyIndicators />
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-transparent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transformando la Gestión de Residuos
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                El PGIRS San Pedro 2025-2036 representa la actualización y fortalecimiento 
                del plan de gestión integral de residuos, diseñado para transformar el 
                municipio hacia una economía circular sostenible.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Con una generación de <strong>3.18 toneladas diarias</strong> y un 
                potencial de aprovechamiento del <strong>66% en residuos orgánicos</strong>, 
                nuestro plan busca alcanzar el <strong>80% de aprovechamiento</strong> 
                para el año 2036.
              </p>

              {/* Objectives */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Objetivos Principales:</h3>
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <p className="text-gray-700">Aprovechar el 80% de residuos orgánicos mediante compostaje y biodigestión</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <p className="text-gray-700">Formalizar 50 recicladores con infraestructura y seguridad social</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <p className="text-gray-700">Lograr que el 85% de hogares realicen separación en la fuente</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <p className="text-gray-700">Reducir en 60% la disposición final de residuos</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/background-secondary.png"
                  alt="Valle del Cauca - Campos de caña"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Participating Entities */}
      <div className="relative z-10 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Entidades Participantes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Alcaldía */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                {/* Logo arriba de la tarjeta */}
                <div className="flex justify-center mb-4">
                  <Image
                    src="/logos/logo-alcaldia.png"   // cambia el nombre si es distinto
                    alt="Alcaldía Municipal de San Pedro"
                    width={160}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Alcaldía Municipal de San Pedro
                </h3>
                <p className="text-gray-600 mb-2">Entidad territorial responsable</p>
                <p className="text-sm text-gray-500">
                  Secretaría de Planeación e Infraestructura
                </p>
              </div>

              {/* San Pedro Limpia */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/logos/logo-prestador.png"  // cambia el nombre si es distinto
                    alt="San Pedro Limpia S.A. E.S.P."
                    width={160}
                    height={64}
                    className="h-20 w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  San Pedro Limpia S.A. E.S.P.
                </h3>
                <p className="text-gray-600 mb-2">Prestador del Servicio</p>
                <p className="text-sm text-gray-500">
                  Servicio Público de Aseo
                </p>
              </div>

              {/* CVC */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/logos/logo-cvc.png"        // cambia el nombre si es distinto
                    alt="CVC - Corporación Autónoma Regional"
                    width={160}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  CVC - Corporación Autónoma Regional
                </h3>
                <p className="text-gray-600 mb-2">Autoridad Ambiental</p>
                <p className="text-sm text-gray-500">
                  Valle del Cauca
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}