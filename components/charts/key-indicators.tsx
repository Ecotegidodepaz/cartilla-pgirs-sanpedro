
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trash2, User, CheckCircle, Recycle, TrendingUp, Target } from 'lucide-react';
import { useRef } from 'react';

const indicators = [
  {
    title: 'Generación Diaria',
    value: 3.18,
    unit: 'toneladas/día',
    icon: Trash2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Per Cápita',
    value: 0.413,
    unit: 'kg/hab-día',
    icon: User,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    title: 'Cobertura Urbana',
    value: 100,
    unit: '% cobertura',
    icon: CheckCircle,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    title: 'Meta Aprovechamiento',
    value: 80,
    unit: '% orgánicos 2036',
    icon: Recycle,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    title: 'Reducción Disposición',
    value: 60,
    unit: '% meta 2036',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    title: 'Recicladores Formalizados',
    value: 50,
    unit: 'meta 2036',
    icon: Target,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }
];

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

function Counter({ end, duration = 2000, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
    </span>
  );
}

export default function KeyIndicators() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {indicators.map((indicator, index) => {
        const Icon = indicator.icon;
        const decimals = indicator.value < 1 ? 3 : indicator.value < 10 ? 2 : 0;
        
        return (
          <motion.div
            key={indicator.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className={`inline-flex p-2 rounded-lg ${indicator.bgColor} mb-3`}>
                  <Icon className={`w-5 h-5 ${indicator.iconColor}`} />
                </div>
                
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  {indicator.title}
                </h3>
                
                <div className="flex items-baseline space-x-2">
                  <span className={`text-2xl font-bold ${indicator.color}`}>
                    <Counter 
                      end={indicator.value} 
                      decimals={decimals}
                      duration={2000 + index * 200}
                    />
                  </span>
                  <span className="text-sm text-gray-500">
                    {indicator.unit}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bar for percentage indicators */}
            {indicator.unit.includes('%') && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(indicator.value, 100)}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1.5 }}
                    className={`h-2 rounded-full ${
                      indicator.color.includes('blue') ? 'bg-blue-500' :
                      indicator.color.includes('green') ? 'bg-green-500' :
                      indicator.color.includes('emerald') ? 'bg-emerald-500' :
                      indicator.color.includes('purple') ? 'bg-purple-500' :
                      indicator.color.includes('orange') ? 'bg-orange-500' :
                      'bg-indigo-500'
                    }`}
                  />
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
