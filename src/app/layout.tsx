import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jagadeesh Kema | .NET Developer Portfolio",
  description: ".NET Developer with 3.9+ years of experience. Skilled in ASP.NET Core, C#, SQL Server, and AWS cloud services.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jagadeesh Kema | .NET Developer Portfolio",
    description: "3.9+ Years of Experience • ASP.NET Core • C# • AWS Cloud Services",
    url: "https://jagadeeshkemajk.netlify.app",
    siteName: "Jagadeesh Kema Portfolio",
    images: [
      {
        url: "https://jagadeeshkemajk.netlify.app/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jagadeesh Kema .NET Developer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagadeesh Kema | .NET Developer Portfolio",
    description: "3.9+ Years of Experience • ASP.NET Core • C# • AWS Cloud Services",
    images: ["https://jagadeeshkemajk.netlify.app/og-image.svg"],
  },
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
        {children}
      </body>
    </html>
  );
}
