"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const light = { true: "Light", false: "Dark" };
  const [mode, setmode] = useState(false);
  const handlemodechange = () => {
    setmode(!mode);
  };
  return (
    <html lang="en" data-theme={light[!mode]} className="text-xl">
      <body className={inter.className}>
        <div className="bg-custom-bg text-custom-text">
        <Navbar />
        {children}
        <Footer />
        <div className="flex gap-2 ml-auto items-center absolute right-2 bottom-0">
          <Switch onClick={handlemodechange} />
          Switch to {light[mode]} Mode
        </div>
        </div>
      </body>
    </html>
  );
}
