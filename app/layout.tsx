import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer, MobileBottomNav } from "./components/layout";
import { SearchProvider } from "./components/providers/SearchProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb Clone - Encuentra tu alojamiento ideal",
  description: "Plataforma de alquiler vacacional. Explora, filtra y reserva los mejores alojamientos en playas de todo el mundo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-gray-900" suppressHydrationWarning>
        <SearchProvider>
          <Header />
          <main className="flex-1 pb-20 sm:pb-0">
            {children}
          </main>
          <Footer />
          <MobileBottomNav />
        </SearchProvider>
      </body>
    </html>
  );
}
