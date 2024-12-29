import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./../components/footer";
import Header from './../components/header';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Paw Hope Rescue",
  description: "Give them hope, one paw at a time",
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen ">
          {children}
        </main>
        <Footer />
      </body>
    </html>)
  );
}

