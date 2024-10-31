import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { SITE_METADATA } from "@/constant";
import { nunitoSans, openSans } from "@/components/fonts";

// SEO template
export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_METADATA.title}`,
    default: SITE_METADATA.title,
  },
  description: SITE_METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${nunitoSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center justify-center">
            <Header />
            <main className="mb-auto grow w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
