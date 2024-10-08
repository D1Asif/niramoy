import { Sora } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const sora = Sora({
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Niramoy",
  description: "Live database of injured patients in student movement & flood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.className} dark:bg-body bg-white dark:text-white text-dark`}>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />

      </body>
    </html>
  );
}
