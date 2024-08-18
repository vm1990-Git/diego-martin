import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Inter } from "next/font/google";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diego Martin Propiedades",
  description: "Diego Martin Propiedades Inmob",
  icons: {
    icon: ["favicon.ico?v=4"],
    apple: ["apple-touch-icon.png?=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column min-vh-100`}>
        <Navbar />
        <main className="flex-fill">{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
