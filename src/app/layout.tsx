import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rautahatpanmasala Pvt Ltd | A taste worth remembering",
  description: "Time-honoured panmasala blends from the heart of Rautahat, Nepal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
