import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Download Terabox Files. @RoldexVerse",
  description: "Download any downloadable files from terabox.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + "  h-full"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
