import localFont from "next/font/local";
import "./globals.css";

const avertaRegular = localFont({
  variable: "--font-averta-regular",
  src: "./fonts/AvertaRegular.woff2",
  display: "swap",
});

export const metadata = {
  title: "Click Boletos",
  description:
    "Compra tus entradas a conciertos y eventos de forma rápida y segura con Click Boletos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${avertaRegular.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
