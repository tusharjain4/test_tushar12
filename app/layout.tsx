import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tushar Jain | Portfolio",
  description: "Software Development Engineer crafting scalable digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}