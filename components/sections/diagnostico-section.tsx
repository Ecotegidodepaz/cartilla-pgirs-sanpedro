
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import WasteCompositionChart from '@/components/charts/waste-composition-chart';
import MonthlyWasteChart from '@/components/charts/monthly-waste-chart';

export default function DiagnosticoSection() {
  const dofahData = {
    fortalezas: [
      'Cobertura 100% en recolección urbana',
      'Alta eficiencia de recaudo (98%)',
      'Disposición final en relleno con licencia ambiental',
      'Existencia de asociación de recicladores (ECORECUPERADORES)',
      'Alto potencial de aprovechamiento (66% orgánicos)'
    ],
    debilidades: [
      'Ausencia de programas de aprovechamiento estructurados',
      'Educación ambiental insuficiente',
      'No hay separación en la fuente generalizada',
      'Recicladores sin infraestructura propia',
      'Cobertura rural limitada (60-75%)'
    ],
    oportunidades: [
      'Alto potencial aprovechable (86% promedio)',
      'Normatividad favorable a economía circular',
      'Posibilidad de cofinanciación (CVC, Nación)',
      'Mercados locales para compost y reciclables',
      'Tecnologías de aprovechamiento accesibles'
    ],
    amenazas: [
      'Cambios normativos imprevistos',
      'Incremento continuo de generación per cápita',
      'Limitaciones presupuestales municipales',
      'Variabilidad de precios de materiales reciclables',
      'Resistencia cultural al cambio'
    ]
  };

  return (
    <section id="diagnostico" className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-2 mb-6">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Diagnóstico Técnico</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Situación Actual del Municipio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Análisis técnico-operativo de la gestión integral de residuos sólidos 
            en San Pedro, Valle del Cauca
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">2,735</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">Toneladas Anuales 2024</h3>
            <p className="text-xs text-gray-500 mt-1">Disposición final</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">98%</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">Eficiencia Recaudo</h3>
            <p className="text-xs text-gray-500 mt-1">Facturación del servicio</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-purple-600">100%</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">Cobertura Urbana</h3>
            <p className="text-xs text-gray-500 mt-1">Servicio de recolección</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-2xl font-bold text-orange-600">65%</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">Cobertura Rural</h3>
            <p className="text-xs text-gray-500 mt-1">Zona plana rural</p>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <WasteCompositionChart />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <MonthlyWasteChart />
          </motion.div>
        </div>

        {/* Situación Actual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Situación Actual</h3>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4">
              El diagnóstico técnico realizado en 2024-2025 identificó que el municipio genera 
              aproximadamente <strong>3.18 toneladas por día</strong> de residuos sólidos, con una 
              producción per cápita de <strong>0.413 kg/habitante-día</strong>.
            </p>
            <p className="mb-4">
              La caracterización física de residuos evidencia que el <strong>66% corresponde a residuos orgánicos</strong>, 
              el <strong>20% a materiales reciclables</strong> y el <strong>14% a residuos inservibles</strong>, 
              lo que representa una significativa oportunidad de aprovechamiento.
            </p>
            <p>
              Actualmente, el 100% de los residuos recolectados se disponen en el Relleno Sanitario 
              Regional Presidente, ubicado a aproximadamente 5.5 km del casco urbano. Si bien el 
              servicio de recolección alcanza una cobertura del 100% en la zona urbana, se requiere 
              fortalecer la cobertura en la zona rural plana y consolidar los programas de 
              aprovechamiento y separación en la fuente.
            </p>
          </div>
        </motion.div>

        {/* Análisis DOFA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Análisis DOFA</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fortalezas */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-green-800">Fortalezas</h4>
              </div>
              <ul className="space-y-2">
                {dofahData.fortalezas.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-green-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Debilidades */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-red-800">Debilidades</h4>
              </div>
              <ul className="space-y-2">
                {dofahData.debilidades.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-red-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Oportunidades */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-blue-800">Oportunidades</h4>
              </div>
              <ul className="space-y-2">
                {dofahData.oportunidades.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-blue-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenazas */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-orange-800">Amenazas</h4>
              </div>
              <ul className="space-y-2">
                {dofahData.amenazas.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span className="text-orange-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
