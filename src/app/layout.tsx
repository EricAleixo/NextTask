import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APP To Do List",
  description: "Aplicativo de gerenciamento de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
