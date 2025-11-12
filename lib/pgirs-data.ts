
export const NAVIGATION_ITEMS = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: 'Home',
    description: 'Presentación del PGIRS San Pedro'
  },
  {
    id: 'diagnostico',
    label: 'Diagnóstico',
    icon: 'BarChart3',
    description: 'Situación actual y análisis técnico'
  },
  {
    id: 'estrategias',
    label: 'Estrategias',
    icon: 'Target',
    description: 'Líneas estratégicas y metas'
  },
  {
    id: 'participacion',
    label: 'Participación',
    icon: 'Users',
    description: 'Programas de inclusión y participación'
  },
  {
    id: 'contacto',
    label: 'Contacto',
    icon: 'Mail',
    description: 'Información de contacto'
  }
];

export const WASTE_COMPOSITION_DATA = [
  { name: 'Orgánicos', value: 66, fill: '#22C55E' },
  { name: 'Reciclables', value: 20, fill: '#3B82F6' },
  { name: 'Inservibles', value: 14, fill: '#EF4444' }
];

export const MONTHLY_WASTE_DATA = [
  { month: 'Ene', urban: 196.37, rural: 59.32, sweeping: 7.04 },
  { month: 'Feb', urban: 163.78, rural: 49.40, sweeping: 6.26 },
  { month: 'Mar', urban: 178.39, rural: 50.31, sweeping: 6.38 },
  { month: 'Abr', urban: 198.87, rural: 56.58, sweeping: 7.66 },
  { month: 'May', urban: 185.87, rural: 60.79, sweeping: 6.67 },
  { month: 'Jun', urban: 178.92, rural: 51.43, sweeping: 8.12 },
  { month: 'Jul', urban: 181.91, rural: 53.24, sweeping: 6.81 },
  { month: 'Ago', urban: 157.77, rural: 48.16, sweeping: 7.20 },
  { month: 'Sep', urban: 189.45, rural: 55.62, sweeping: 7.81 },
  { month: 'Oct', urban: 191.34, rural: 55.78, sweeping: 6.49 },
  { month: 'Nov', urban: 230.59, rural: 63.30, sweeping: 7.43 }
];

export const KEY_INDICATORS = [
  {
    title: 'Generación Diaria',
    value: '3.18',
    unit: 'toneladas/día',
    icon: 'Trash2',
    color: 'text-blue-600'
  },
  {
    title: 'Per Cápita',
    value: '0.413',
    unit: 'kg/hab-día',
    icon: 'User',
    color: 'text-green-600'
  },
  {
    title: 'Cobertura Urbana',
    value: '100',
    unit: '%',
    icon: 'CheckCircle',
    color: 'text-emerald-600'
  },
  {
    title: 'Aprovechamiento Meta',
    value: '80',
    unit: '% orgánicos 2036',
    icon: 'Recycle',
    color: 'text-purple-600'
  }
];

export const PROGRAMS_DATA = [
  {
    title: 'Participación Ciudadana y Gobernanza',
    budget: '1,650',
    classification: 'Fortalecido',
    percentage: '14.8',
    color: 'bg-blue-500'
  },
  {
    title: 'Inclusión Social de Recicladores', 
    budget: '1,200',
    classification: 'Continuidad',
    percentage: '10.8',
    color: 'bg-green-500'
  },
  {
    title: 'Cultura y Educación Ambiental',
    budget: '5,806',
    classification: 'Fortalecido',
    percentage: '52.1',
    color: 'bg-purple-500'
  },
  {
    title: 'Gestión de Residuos Orgánicos',
    budget: '3,000',
    classification: 'NUEVO',
    percentage: '26.9',
    color: 'bg-orange-500'
  }
];
