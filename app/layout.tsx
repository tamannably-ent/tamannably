import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { connectFooter, serviceFooter } from "@/lib/footer";
import { CompanyName, ContactDetails } from "@/lib/homeContent";
import SocialMedia from "@/components/socialMedia";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const position = {
  grid: 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1',
  size: "h-[16px] w-[16px]"
}

export const metadata: Metadata = {
  title: `${CompanyName.fullName}`,
  description: `${CompanyName.fullName}, Serves High Speed internet Connections in Bellary, Karnatak`,
  keywords: [
    'internet provider Bellary',
    'high speed internet Bellary',
    'broadband connections Karnataka',
    'Tamanna Enterprises services',
    'best internet service Bellary',
    'fiber internet Bellary'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="shadow-downwards-mode">
            <NavBar />
          </div>
          <div className="py-5 bg-background shadow-2xl shadow-slate-600">
            {children}
          </div>
          <div className="fixed right-0 top-[40%] bg-amber-400/50 p-5 rounded-md opacity-20 hover:opacity-100 hover:transition-opacity z-50">
            <SocialMedia ContactDetails={ContactDetails} position={position} />
          </div>
          <div>
            <Footer services={serviceFooter} connect={connectFooter} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
