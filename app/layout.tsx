"use client";
import "./_styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Organism from "@organism";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Purrintables",
//   description: "This is the website of Purrintables",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://shopee.ph/purrintables";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Organism.Wrapper>
        <body className={inter.className}>
          <div className="text-center p-5">
            Redirecting. Click <a className="font-bold text-[#df56c0] hover:underline" href="https://shopee.ph/purrintables">here</a> if you are not automatically redirected.
          </div>
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
