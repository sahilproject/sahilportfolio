import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Responsive from "./Navbar/Responsive";
import Footer from "./Footer/Footer";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website. Showcasing my projects and skills.",
  icons: {
    icon: "images/favicon.ico", 
  },
  openGraph: {
    title: "My Portfolio",
    description: "Welcome to my portfolio website. Showcasing my projects and skills.",
    url: "http://localhost:3000",
    siteName: "My Portfolio",
    images: [
      {
        url: "http://localhost:3000/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "Welcome to my portfolio website. Showcasing my projects and skills.",
    images: ["http://localhost:3000/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Responsive />
        {children}
        <Footer />
      </body>
    </html>
  );
}
