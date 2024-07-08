import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["500"]
  });

export const metadata: Metadata = {
  title: "Rotten Bypass",
  description: "¿Buscas un bypass altamente efectivo y completamente automatizado? Permíteme presentarte la nueva versión del Rotten con su source y métodos 100% actualizada, brindándoles una buena seguridad al momento de cualquier pc check.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>                              
        <div className="absolute top-0 bottom-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(175,66,255,0.3),rgba(255,255,255,0))]"></div>
        {children}
        </body>
    </html>
  );
}
