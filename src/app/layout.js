import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "C11",
  description: "Demo de C11",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-es">

      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>

    </html>
  );
}
