import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

//Import Needed Utils
import { cn } from "@/lib/utils"

//Import Needed Components
import { ThemeProvider } from "@/components/theme-provider"

//Import Styles
import "../styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "Live Docs Web App",
  description: "Your collaborative editor",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}