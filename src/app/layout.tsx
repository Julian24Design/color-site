import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { linkfree } from "@/ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colorpee",
  description: "",
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${linkfree.variable} bg-panda-blue w-full overflow-x-hidden overflow-y-scroll lg:overflow-y-auto`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
