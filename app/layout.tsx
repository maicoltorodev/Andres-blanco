import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Andrés Blanco | Presidencia EAN 2026',
  description: 'Únete al movimiento de cambio en la Universidad EAN. Andrés Blanco para presidente del consejo estudiantil.',
  generator: 'v0.app',
  openGraph: {
    title: 'Andrés Blanco | Presidencia EAN 2026',
    description: 'Únete al movimiento de cambio en la Universidad EAN. Andrés Blanco para representante de la facultad de ingeniería.',
    images: [
      {
        url: '/metadata.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrés Blanco | Presidencia EAN 2026',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrés Blanco | Presidencia EAN 2026',
    description: 'Únete al movimiento de cambio en la Universidad EAN. Andrés Blanco para representante de la facultad de ingeniería.',
    images: ['/metadata.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
