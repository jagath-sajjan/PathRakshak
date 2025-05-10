import type React from "react"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "PathRakshak - Strategic Convoy Routing System",
  description:
    "AI-guided route planning for safe, efficient military logistics movement in high-risk environments and war-like scenarios.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} font-mono`}>{children}</body>
    </html>
  )
}
