import type { Metadata } from "next";
import { Geist_Mono, Lato } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dev tools",
  description: "A collection of dev tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${lato.variable} ${geistMono.variable} antialiased w-full h-screen flex flex-col`}
      >
        <header className="w-full flex justify-center">Header</header>
        <main className="flex-1 max-w-[1024px] mx-auto px-2 lg:p-0">{children}</main>
        <footer className="w-full flex justify-center">
          <span>Dev tools &copy;</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
      </body>
    </html>
  );
}
