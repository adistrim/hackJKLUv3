import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './components/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hack JKLU 3.0',
  description: 'Hackathon of JK Lakshmipat University',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <Header />
      <body className={inter.className}>{children}</body>
    </>
  )
}
