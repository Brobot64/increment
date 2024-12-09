import type { Metadata } from "next";
import "./globals.css";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export const metadata: Metadata = {
  title: "Increment",
  description: "Next Level Increment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
