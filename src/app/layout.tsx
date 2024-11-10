import type { Metadata } from "next";
import jetBrains_Mono from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/Header/Header";
import PageTransition from "@/components/ui/PageTransition";
import Footer from "@/components/Footer/Footer";


const geistSans = jetBrains_Mono({
  src: "./fonts/GeistVF.woff",
  variable: "--font-jetbrainsMono",
  weight: "100 900",
});
const geistMono = jetBrains_Mono({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-jetbrainsMono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Build by Aliza Moin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#30014] antialiased`}>

        <Header />
          <PageTransition>  
        {children}
          </PageTransition>  
        <Footer /> 
        
      </body>
    </html>
  );
};