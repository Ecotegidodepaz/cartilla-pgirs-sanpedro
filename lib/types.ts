
// PGIRS Data Types
export interface PGIRSData {
  inicio: {
    titulo: string;
    municipio: string;
    periodo: string;
    presentacion: string[];
    objetivos: string[];
    entidades_participantes: {
      nombre: string;
      rol: string;
      dependencia?: string;
    }[];
  };
  diagnostico: {
    titulo: string;
    situacion_actual: string[];
    problematicas: string[];
    analisis: Array<{
      tipo: string;
      datos: string[][];
    }>;
  };
  estrategias: {
    titulo: string;
    lineas_estrategicas: string[];
    metas: Array<{
      tipo: string;
      datos: string[][];
    }>;
    acciones: string[];
  };
  programas: {
    inclusion_recicladores: {
      titulo: string;
      contenido: Array<{
        tipo: string;
        texto: string;
        es_titulo: boolean;
      } | {
        tipo: string;
        datos: string[][];
      }>;
    };
  };
}

// Navigation
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  description: string;
}

// Avatar States
export interface AvatarState {
  isListening: boolean;
  isSpeaking: boolean;
  currentText: string;
}

// Chart Data
export interface ChartData {
  name: string;
  value: number;
  fill?: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}
