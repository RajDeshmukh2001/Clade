import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { MenuProvider } from "@/context/MenuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clade",
  description: "Converting Figma design into a Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700,1&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${inter.className} bg-[#E7E7E7]`}>
        <MenuProvider>
          <Navbar />
          {children}
          <ResponsiveNavbar />
        </MenuProvider>
      </body>
    </html>
  );
}
