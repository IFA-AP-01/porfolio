import Header from "@/components/header";
import '../lib/fontawesome';
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const font = Inter({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="theme-color" content="#f5f5f5" />
      </head>
      <body
        className={`${font.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#131313] dark:text-gray-50 dark:text-opacity-90 transition-colors duration-300`}
      >
        <div className="bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-[#654ea3] dark:to-[#eaafc8] transition-colors duration-300"></div>
        <div className="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-[#2a2a3a] dark:to-[#4a3b5b] transition-colors duration-300"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
