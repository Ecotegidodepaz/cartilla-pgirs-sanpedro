'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, BarChart3, Target, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navigationItems = [
  { id: 'inicio', label: 'Inicio', icon: Home, description: 'Presentación del PGIRS' },
  { id: 'diagnostico', label: 'Diagnóstico', icon: BarChart3, description: 'Situación actual y análisis' },
  { id: 'estrategias', label: 'Estrategias', icon: Target, description: 'Líneas estratégicas y metas' },
  { id: 'participacion', label: 'Participación', icon: Users, description: 'Programas de inclusión' },
  { id: 'contacto', label: 'Contacto', icon: Mail, description: 'Información de contacto' }
];

interface NavigationHeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function NavigationHeader({ currentSection, onSectionChange }: NavigationHeaderProps) {
  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-green-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            {/* Logo de la Alcaldía */}
            <Image
              src="/logos/logo-alcaldia.png"
              alt="Alcaldía Municipal de San Pedro"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">Cartilla WEB PGIRS San Pedro</h1>
              <p className="text-xs text-gray-600">Valle del Cauca 2025-2036</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`relative ${
                    isActive 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'hover:bg-green-50 text-gray-700'
                  } transition-all duration-200`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">{item.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                    />
                  )}
                </Button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              // Could implement mobile menu here
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-green-200 bg-white/95">
        <div className="px-4 py-2 flex justify-center space-x-1 overflow-x-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            
            return (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                className={`flex-shrink-0 ${
                  isActive 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'hover:bg-green-50 text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline text-xs">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </motion.header>
  );
}