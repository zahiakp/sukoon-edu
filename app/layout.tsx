import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { RiWhatsappFill } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdCall } from "react-icons/io";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import PageLoader from "@/components/Loader";
import AOSClient from "@/components/AOS";

const outfit = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sukoon Edu Village",
  description: "Sukoon Edu Village is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}><PageLoader/>{children}
        
      </body>
    </html>
  );
}
