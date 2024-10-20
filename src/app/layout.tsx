import type { Metadata } from "next";
import "./globals.css";
import NavCpn from "@/components/Nav/NavCpn";
import { ThemeProvider } from "@/components/ThemeProvider";

// SEO template
export const metadata: Metadata = {
  title: {
    template: "%s | Joe's Blog",
    default: "Joe's Blog",
  },
  description: "Joe's Blog Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center justify-center">
            <NavCpn />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
