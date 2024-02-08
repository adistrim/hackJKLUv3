import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackJKLU 3.0",
  description:
    "Come be a part of HackJKLU 3.0, the hackathon organized by the Smart Tech Club of JK Lakshmipat University. Join us from 15th to 17th March 2024 for a thrilling experience in web2, web3, IoT, game dev, AR/VR, cybersecurity, AI/ML, and open innovation. Register now!",
  keywords:
    "HackJKLU, JKLU hackathon, web development hackathon, AI/ML hackathon, cybersecurity challenge, game development hackathon, AR/VR hackathon, IoT hackathon, open innovation, JK Lakshmipat University, Jaipur, Rajasthan, India, hackathon, Jaipur hackathon, hackathon in march, hackathon in 2024, hackathon in India, hackathon in Rajasthan, hackathon in Jaipur, hackathon in JKLU, hackathon in JK Lakshmipat University, hackathon in JKLU Jaipur, hackathon in JKLU Rajasthan, hackathon in JKLU India, hackathon in JKLU Jaipur Rajasthan India, hackathon in JKLU Jaipur Rajasthan, hackathon in JKLU Jaipur India, hackathon in JKLU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="/hackjklu-logo.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
