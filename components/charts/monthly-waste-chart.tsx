
'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { month: 'Ene', urbano: 196.37, rural: 59.32, barrido: 7.04 },
  { month: 'Feb', urbano: 163.78, rural: 49.40, barrido: 6.26 },
  { month: 'Mar', urbano: 178.39, rural: 50.31, barrido: 6.38 },
  { month: 'Abr', urbano: 198.87, rural: 56.58, barrido: 7.66 },
  { month: 'May', urbano: 185.87, rural: 60.79, barrido: 6.67 },
  { month: 'Jun', urbano: 178.92, rural: 51.43, barrido: 8.12 },
  { month: 'Jul', urbano: 181.91, rural: 53.24, barrido: 6.81 },
  { month: 'Ago', urbano: 157.77, rural: 48.16, barrido: 7.20 },
  { month: 'Sep', urbano: 189.45, rural: 55.62, barrido: 7.81 },
  { month: 'Oct', urbano: 191.34, rural: 55.78, barrido: 6.49 },
  { month: 'Nov', urbano: 230.59, rural: 63.30, barrido: 7.43 }
];

export default function MonthlyWasteChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-green-100"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Generación Mensual de Residuos 2024
        </h3>
        <p className="text-sm text-gray-600">
          Distribución mensual por zona (toneladas)
        </p>
      </div>

      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickLine={false}
              label={{ 
                value: 'Toneladas', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fontSize: 12 }
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value: number, name: string) => [
                `${value.toFixed(1)} ton`,
                name === 'urbano' ? 'Urbano' : name === 'rural' ? 'Rural' : 'Barrido'
              ]}
            />
            <Legend 
              verticalAlign="top"
              height={36}
              wrapperStyle={{ fontSize: '12px' }}
            />
            <Bar 
              dataKey="urbano" 
              fill="#22C55E" 
              name="Urbano"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="rural" 
              fill="#3B82F6" 
              name="Rural"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="barrido" 
              fill="#F59E0B" 
              name="Barrido"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-600">2,053</div>
          <div className="text-xs text-gray-600">ton Urbano</div>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-lg font-bold text-blue-600">604</div>
          <div className="text-xs text-gray-600">ton Rural</div>
        </div>
        <div className="text-center p-3 bg-yellow-50 rounded-lg">
          <div className="text-lg font-bold text-yellow-600">78</div>
          <div className="text-xs text-gray-600">ton Barrido</div>
        </div>
      </div>
    </motion.div>
  );
}
