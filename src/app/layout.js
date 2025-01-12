import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "./components/TopNavbar/TopNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TopNavbar />
      {children}
      
      </body>
    </html>
  );
}
