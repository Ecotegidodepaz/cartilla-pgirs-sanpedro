
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'PGIRS San Pedro Valle del Cauca 2025-2036',
  description: 'Plan de Gestión Integral de Residuos Sólidos - Cartilla Digital Interactiva del Municipio de San Pedro, Valle del Cauca',
  openGraph: {
    title: 'PGIRS San Pedro Valle del Cauca 2025-2036',
    description: 'Plan de Gestión Integral de Residuos Sólidos - Cartilla Digital Interactiva',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
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
        </ThemeProvider>
      </body>
    </html>
  )
}
