
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building2, Users, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    formType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      title: 'Alcaldía Municipal de San Pedro',
      role: 'Entidad Territorial Responsable',
      department: 'Secretaría de Planeación e Infraestructura',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      details: [
        { icon: MapPin, text: 'Calle Principal, San Pedro, Valle del Cauca' },
        { icon: Phone, text: '(+57) 2-XXX-XXXX' },
        { icon: Mail, text: 'planeacion@sanpedro-valledelcauca.gov.co' }
      ]
    },
    {
      title: 'San Pedro Limpia S.A. E.S.P.',
      role: 'Prestador del Servicio Público de Aseo',
      department: 'Operación y Atención al Usuario',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      details: [
        { icon: MapPin, text: 'San Pedro, Valle del Cauca' },
        { icon: Phone, text: '(+57) 2-XXX-XXXX' },
        { icon: Mail, text: 'atencion@sanpedrolimpia.com.co' }
      ]
    },
    {
      title: 'CVC - Corporación Autónoma Regional',
      role: 'Autoridad Ambiental',
      department: 'Valle del Cauca',
      icon: MapPin,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      details: [
        { icon: MapPin, text: 'Cali, Valle del Cauca' },
        { icon: Phone, text: '(+57) 2-620-6600' },
        { icon: Mail, text: 'cvc@cvc.gov.co' }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically save to database
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        formType: 'general'
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-2 mb-6">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Contacto e Información</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Tienes alguna consulta sobre el PGIRS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctanos para obtener más información sobre el Plan de Gestión 
            Integral de Residuos Sólidos de San Pedro, Valle del Cauca
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{contact.role}</p>
                    <p className="text-xs text-gray-500">{contact.department}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {contact.details.map((detail, detailIndex) => {
                    const DetailIcon = detail.icon;
                    return (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <DetailIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos tu consulta
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-3 bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">
                    ¡Mensaje enviado exitosamente! Te responderemos pronto.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Tema de tu consulta"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Escribe tu consulta o comentario sobre el PGIRS..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    * Campos obligatorios
                  </p>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Enviar mensaje</span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Horarios de atención
              </h4>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Lunes a Viernes: 8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Sábados: 8:00 AM - 12:00 PM</span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Información del PGIRS
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Plan vigente período 2025-2036
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Presupuesto total: $11,656 millones COP
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Meta: 80% aprovechamiento orgánicos
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    50 recicladores a formalizar
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Para consultas técnicas específicas sobre el PGIRS, 
                  puedes dirigirte directamente a la Secretaría de 
                  Planeación e Infraestructura.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 py-8 border-t border-gray-200"
        >
          <p className="text-gray-600">
            © 2025 Alcaldía Municipal de San Pedro, Valle del Cauca - PGIRS 2025-2036
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Plan de Gestión Integral de Residuos Sólidos - Cartilla Digital Interactiva
          </p>
        </motion.div>
      </div>
    </section>
  );
}
