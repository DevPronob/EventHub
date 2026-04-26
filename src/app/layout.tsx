/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/authContext";
import "./globals.css";

import { PT_Sans, Roboto_Condensed } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--font-roboto-condensed",
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${robotoCondensed.variable}`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}