import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins =  Poppins({weight:['300','600','700'], subsets: ["latin"] });

export const metadata = {
  title: {
    default:'Next Hero',
    template:'%s | Next Hero'
  },
  description: "build up next level website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={poppins.className}>
        <Navbar></Navbar>     
        <div className="">
        {children}
        </div>
        <footer className="bg-gray-400 text-white px-5 py-8">This is footer</footer>
        </body>
     
    </html>
  );
}
