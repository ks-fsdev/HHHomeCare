import "./globals.css";

export const metadata = {
  title: "HHHomecare",
  description: "Elite Healthcare Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
