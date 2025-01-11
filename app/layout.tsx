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
      <body className={outfit.className}><PageLoader/><Nav/><AOSClient/>{children}
        <a target="_blank" href="https://wa.me/+919645900096?text=Hello%20Sukoon%20Edu%20Village" className="p-[6px] rounded-full fixed bottom-7 z-[2] right-7 shadow-xl bg-[#25D366] text-white text-4xl">
        <RiWhatsappFill />
        </a>
        <a target="_blank" href="tel:+919645900096" className="p-[10px] rounded-full fixed bottom-7 z-[2] left-7 shadow-xl bg-blue-500 text-white text-2xl">
        <IoMdCall />
        </a>
        <Footer/>
      </body>
    </html>
  );
}
