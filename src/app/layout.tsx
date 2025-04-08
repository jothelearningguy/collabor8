'use client'

import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Collabor8 - The College Tutor Marketplace',
  description: 'Connect with verified college tutors through engaging video content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Connect with verified college tutors through engaging video content"
        />
        <meta property="og:title" content="Collabor8 - The College Tutor Marketplace" />
        <meta property="og:description" content="Connect with verified college tutors through engaging video content" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://collabor8.vercel.app" />
      </head>
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Collabor8
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/tutor-signup"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {children}
        
        <footer className="bg-gray-50 border-t">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Join UNC&apos;s fastest-growing tutoring platform
              </p>
              <Link
                href="/tutor-signup"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Start Earning Now
              </Link>
              <div className="mt-8 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Collabor8. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
