import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DEADF5 - The Ultimate Crypto Revolution',
  description: 'DEADF5 is the next generation cryptocurrency on Solana. Join the revolution.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}