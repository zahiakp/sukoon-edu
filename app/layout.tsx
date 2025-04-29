import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Rouge_Script } from "next/font/google";
import PageLoader from "@/components/common/Loader";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const outfit = Plus_Jakarta_Sans({ subsets: ["latin"],variable:"--font-Plus-Jakarta" });
const RougeScript = Rouge_Script({weight: '400',subsets: ['latin'],variable: '--font-rouge-script'});

export const metadata: Metadata = {
  title: "Sukoon Edu Foundation",
  description: "Sukoon Edu Foundation is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
  keywords: ['Sukoon', 'Edu', 'Foundation', 'foundation', 'hariyana', 'ngo'],
  metadataBase: new URL('https://mysukoon.in/'),
  openGraph: {
    url: "https://mysukoon.in/",
    description: "Sukoon Edu Foundation is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
    images:["https://mysukoon.in/image/sukoonlogo.png"]
  },
  
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${RougeScript.variable}`} ><GoogleAnalytics gaId="G-KJNE124PN1" /><PageLoader/><PrimeReactProvider>{children}</PrimeReactProvider>
        
      </body>
    </html>
  );
}
