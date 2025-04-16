import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tutr by HEALLY - The College Tutor Marketplace',
  description: 'A modern platform connecting students with verified tutors through engaging video content.',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  openGraph: {
    title: 'tutr by HEALLY - The College Tutor Marketplace',
    description: 'A modern platform connecting students with verified tutors through engaging video content.',
    type: 'website',
    url: 'https://tutr.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <header className="bg-black border-b border-gray-800">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                tutr by HEALLY
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/tutor-signup"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-black border-t border-gray-800 py-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-400">
              &copy; {new Date().getFullYear()} tutr by HEALLY. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
