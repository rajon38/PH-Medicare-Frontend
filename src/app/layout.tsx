import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProviders from "@/providers/QueryProvider";
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PH Medicare Management System",
  description: "A comprehensive healthcare management system built with Next.js, Prisma, and PostgreSQL. It offers features for patient management, appointment scheduling, billing, and reporting, streamlining healthcare operations and improving patient care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProviders>
          <ReactQueryStreamedHydration>
        {children}
          </ReactQueryStreamedHydration>
        </QueryProviders>
      </body>
    </html>
  );
}
