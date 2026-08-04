import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soy Emprendedor UVP | Emprende y deja huella",
  description:
    "Formación, titulación, incubación y conexiones para transformar ideas UVP en proyectos con impacto.",
  metadataBase: new URL("https://www.uvp.mx"),
  openGraph: {
    title: "Soy Emprendedor UVP | Emprende y deja huella",
    description: "Tu idea no es solo un proyecto escolar. Es tu próxima empresa.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${merriweather.variable}`}>
        {children}
        <script src="/script.js" defer />
      </body>
    </html>
  );
}
