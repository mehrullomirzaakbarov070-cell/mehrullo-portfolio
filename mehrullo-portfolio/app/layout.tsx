
import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Mehrullo | Cyberpunk Developer Portfolio",
  description:
    "Mirzaakbarov Mehrulloning dasturchilik portfoliolari, ko‘nikmalari va loyihalari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
