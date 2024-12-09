import "./_styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Organism from "@organism";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purrintables",
  description: "This is the website of Purrintables",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Organism.Wrapper>
        <body className={inter.className}>
          <div className="container mx-auto p-5">Redirecting. Click <a href="https://shopee.ph/purrintables">here</a> if you are not automatically redirected.</div>
          <div className="hidden">
            <Organism.Header />
            {children}
            <Organism.Footer />
          </div>
        </body>
      </Organism.Wrapper>
    </html>
  );
}
