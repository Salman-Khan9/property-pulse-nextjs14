import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Property Pulse",
  description: " Poperty rentals ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}
