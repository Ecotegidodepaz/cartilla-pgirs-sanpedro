
'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Residuos Orgánicos', value: 66, fill: '#22C55E', description: '2.10 ton/día' },
  { name: 'Materiales Reciclables', value: 20, fill: '#3B82F6', description: '0.64 ton/día' },
  { name: 'Residuos Inservibles', value: 14, fill: '#EF4444', description: '0.44 ton/día' }
];

export default function WasteCompositionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-green-100"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Composición de Residuos Sólidos
        </h3>
        <p className="text-sm text-gray-600">
          Distribución porcentual de los 3.18 toneladas generadas diariamente
        </p>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
              animationBegin={0}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string, props: any) => [
                `${value}% (${props.payload?.description || ''})`,
                name
              ]}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{ fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="text-center p-3 bg-gray-50 rounded-lg"
          >
            <div
              className="w-4 h-4 rounded-full mx-auto mb-2"
              style={{ backgroundColor: item.fill }}
            />
            <div className="text-2xl font-bold" style={{ color: item.fill }}>
              {item.value}%
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
