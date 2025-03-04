import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import Header from "../components/header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Watch Poor Asian girl Ra*ped, Mo*an Loudly",
  description: "Watch Poor Asian Teen Girl Forced to Recieve Big Di*k",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Meta Tags */}
        <title>Paw Hope Rescue</title>
        <meta name="description" content="Watch Poor Asian girl Ra*ped, Mo*an Loudly" />
        <meta name="keywords" content="pet rescue, adopt, save pets, hope for pets" />
        <meta name="author" content="Watch Poor Asian girl Ra*ped, Mo*an Loudly" />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Watch Poor Asian girl Ra*ped, Mo*an Loudly" />
        <meta property="og:description" content="Watch Poor Asian Teen Girl Forced to Recieve Big Di*k" />
        <meta property="og:image" content="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1741097188/Untitled_design_1_yqgvzx.png" />
        <meta property="og:url" content="https://pawhope.vercel.app" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VXH4HYMXJL"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VXH4HYMXJL');
          `}
        </Script>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
