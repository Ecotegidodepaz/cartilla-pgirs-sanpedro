
# 🌿 Cartilla Digital PGIRS San Pedro

**Plan de Gestión Integral de Residuos Sólidos 2025-2036**  
Municipio de San Pedro, Valle del Cauca, Colombia

## 📋 Descripción

Cartilla digital interactiva que presenta el Plan de Gestión Integral de Residuos Sólidos (PGIRS) del municipio de San Pedro para el período 2025-2036. La aplicación ofrece una experiencia multimedia completa con:

- 🎙️ **Narración de audio automatizada** con voz de Carlos (guía virtual)
- 📊 **Visualizaciones interactivas** de datos y estadísticas
- 🎨 **Diseño responsivo** con efectos parallax y animaciones
- 📹 **Grabación de video** para exportar presentaciones completas
- 🗺️ **Navegación por secciones**: Inicio, Diagnóstico, Estrategias, Participación y Contacto

## 🚀 Demo

[Ver demo en vivo](#) *(agregar URL cuando esté desplegada)*

## 🛠️ Tecnologías

- **Framework**: Next.js 14.2.28
- **UI**: React 18 + TypeScript
- **Estilos**: Tailwind CSS + Framer Motion
- **Componentes**: Radix UI + shadcn/ui
- **Gráficos**: Recharts + Chart.js
- **Audio**: Web Speech API
- **Video**: MediaRecorder API

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- Yarn (recomendado) o npm

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/cartilla-pgirs-sanpedro.git
cd cartilla-pgirs-sanpedro/nextjs_space
```

2. **Instalar dependencias**
```bash
yarn install
# o
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```
Edita `.env` y agrega tu clave API de Abacus.AI:
```
ABACUSAI_API_KEY="tu_clave_real_aqui"
```

4. **Ejecutar en desarrollo**
```bash
yarn dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎬 Generar Video Completo

La aplicación incluye funcionalidad para grabar la presentación completa en formato video:

1. Inicia la aplicación en desarrollo o producción
2. Haz clic en el botón **"Video Completo (15-17 min)"**
3. Selecciona la pestaña del navegador cuando se solicite compartir pantalla
4. ✅ **Importante**: Marca la casilla "Compartir audio de la pestaña"
5. El video se descargará automáticamente al finalizar

**Formato**: WebM (compatible con YouTube)  
**Duración**: 15-17 minutos  
**Resolución**: 1920x1080 @ 30fps

## 📁 Estructura del Proyecto

```
nextjs_space/
├── app/
│   ├── api/avatar-speech/     # API de generación de narrativa
│   ├── globals.css            # Estilos globales
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página principal
├── components/
│   ├── avatar-guide.tsx       # Componente del guía virtual
│   ├── charts/                # Gráficos y visualizaciones
│   ├── sections/              # Secciones de la cartilla
│   └── ui/                    # Componentes UI reutilizables
├── lib/
│   ├── pgirs-data.ts          # Datos del PGIRS
│   ├── presentation-script.ts # Script de presentación
│   └── types.ts               # Tipos TypeScript
└── public/
    ├── logos/                 # Logos institucionales
    ├── pgirs_images/          # Imágenes del plan
    └── pgirs_content.json     # Contenido estructurado
```

## 🌐 Despliegue

### Vercel (Recomendado para Next.js)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Conecta tu repositorio de GitHub
2. Agrega la variable de entorno `ABACUSAI_API_KEY`
3. Despliega automáticamente

### Netlify

```bash
yarn build
# El output estará en .next/
```

## 📊 Contenido del PGIRS

La cartilla incluye:

- **Diagnóstico**: Análisis DOFA, generación de residuos, composición
- **Estrategias**: Líneas estratégicas 2025-2036
- **Programas**: 5 programas con presupuesto detallado (COP $3.8 mil millones)
- **Participación**: Mecanismos de gobernanza y educación ambiental
- **Contacto**: Información de entidades responsables

## 👥 Entidades Participantes

- **Alcaldía Municipal de San Pedro**
- **San Pedro Limpia S.A. E.S.P.** (Operador de aseo)
- **CVC** (Corporación Autónoma Regional del Valle del Cauca)

## 📄 Licencia

Este proyecto está bajo licencia [MIT](LICENSE) *(o la que elijas)*.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

**Municipio de San Pedro, Valle del Cauca**  
Email: alcaldia@sanpedro-valle.gov.co  
Sitio web: [www.sanpedro-valle.gov.co](http://www.sanpedro-valle.gov.co)

---

Desarrollado con 💚 para el Municipio de San Pedro, Valle del Cauca
