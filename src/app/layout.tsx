import type { Metadata } from "next";

import "./globals.css";

// font imports + definitions
import { Inter, Roboto, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
});
const outfit = Outfit({ subsets: ["latin"] });

// add fonts: outfit (nav bar text, sub body, product title + price), roboto (body text), laisha (h1), outfit

// comoponents
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
