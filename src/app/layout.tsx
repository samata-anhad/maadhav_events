
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import SiteNavbar from "../components/SiteNavbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maadhav Web App",
  description: "Welcome to Maadhav Web App",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
