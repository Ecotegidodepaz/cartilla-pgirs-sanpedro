import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import InstitucionesLogos from '@/components/InstitucionesLogos'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  // Usar siempre el dominio público corto
  metadataBase: new URL('https://pgirs-sanpedro.vercel.app'),
  title: 'PGIRS San Pedro Valle del Cauca 2025-2036',
  description:
    'Plan de Gestión Integral de Residuos Sólidos - Cartilla Digital Interactiva del Municipio de San Pedro, Valle del Cauca',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'PGIRS San Pedro Valle del Cauca 2025-2036',
    description:
      'Plan de Gestión Integral de Residuos Sólidos - Cartilla Digital Interactiva del Municipio de San Pedro, Valle del Cauca',
    siteName: 'PGIRS San Pedro',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PGIRS San Pedro - Alcaldía Municipal de San Pedro, Valle del Cauca',
      },
    ],
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PGIRS San Pedro Valle del Cauca 2025-2036',
    description:
      'Plan de Gestión Integral de Residuos Sólidos - Cartilla Digital Interactiva del Municipio de San Pedro, Valle del Cauca',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <InstitucionesLogos />
        </ThemeProvider>
      </body>
    </html>
  )
}