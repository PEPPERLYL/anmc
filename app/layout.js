import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ANMC | Africa NFT  & Metaverse Conference",
  description:
    "Unlocking Africa's Digital Future : showcasing Creativity. Made by Africa. For Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
