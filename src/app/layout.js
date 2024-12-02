import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Layout/Navbar";
import ApiCaller from "./_components/ApiCaller/ApiCaller";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Play Terabox Videos Without Ads.",
  description: "Download any downloadable files from terabox.com",
  openGraph: {
    type: "article",
    title: 'Play Terabox Videos Without Ads',
    description: "Play any video from terabox.com without Ads.",
    url: `https://xnjoy.live`,
    images: [
      {
        url: '/og_img.png',
        width: 1200,
        height: 630,
        alt: 'xnjoy',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + "  h-full"}>
        <ApiCaller/>
        {children}
      </body>
    </html>
  );
}
