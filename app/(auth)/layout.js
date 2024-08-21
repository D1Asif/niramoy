import { Sora } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const sora = Sora({
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Niramoy",
  description: "Live database of injured patients in student movement",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  
  if (session?.user) {
    redirect("/account");
  }

  return (
    <html lang="en">
      <body className={`${sora.className} dark:bg-body bg-white dark:text-white text-dark`}>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <header>
          <Navbar fromAuth={true} />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
