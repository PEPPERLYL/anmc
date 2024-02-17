import "./globals.css";

import { Fira_Sans_Condensed } from "next/font/google";

const firaSansCondensed = Fira_Sans_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fira-sans-condensed",
});

export const metadata = {
  title: "ANMC | Africa NFT  & Metaverse Conference",
  description:
    "Unlocking Africa's Digital Future : showcasing Creativity. Made by Africa. For Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSansCondensed.variable}`}>{children}</body>
    </html>
  );
}
