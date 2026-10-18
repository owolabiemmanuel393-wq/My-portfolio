import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damilola Owolabi — Product Designer x Agentic Software Engineer",
  description: "I build impactful software products by combining product thinking, user centered design, and agentic engineering.",
  icons: {
    icon: "/assets/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@400;500;600;700&family=Style+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F7F7F8] text-black font-sans antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
