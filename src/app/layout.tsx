import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import AppLayout from "~/components/templates/AppLayout";

export const metadata: Metadata = {
  title: "Surface labs",
  description: "surface labs onboarding",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body><AppLayout>{children}</AppLayout> </body>
    </html>
  );
}
