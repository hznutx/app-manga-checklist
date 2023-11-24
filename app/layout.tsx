import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Manga Checklist",
  description: "All Webtoon tracking completely read with checklist and tag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
