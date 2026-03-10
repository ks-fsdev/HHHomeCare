import Header from "@/app/components/Header";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
