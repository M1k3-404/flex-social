import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flex Social",
  description: "Flex Social: Empowering local businesses with innovative marketing strategies and cutting-edge software solutions. Enhance your brand visibility and generate leads with our expert team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/flex-favicon-2.ico" />
      </head>
      <NextUIProvider>
        <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
