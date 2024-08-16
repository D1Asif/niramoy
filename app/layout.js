import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "MovieDB",
  description: "MovieDB displays movie details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={`${sora.className} dark:bg-body bg-white dark:text-white text-dark`}>
                <header>
                    <Navbar />
                </header>
                {children}
                <Footer />
            </body>
        </html>
  );
}
