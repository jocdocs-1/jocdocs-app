import "./globals.css";
import { robotoCondensed } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        {children}
      </body>
    </html>
  );
}