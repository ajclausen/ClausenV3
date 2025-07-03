import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrew Clausen | Portfolio",
  description: "Andrew Clausen is a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.",
  keywords: ["Developer", "Portfolio", "Web Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Andrew Clausen" }],
  openGraph: {
    title: "Andrew Clausen | Portfolio",
    description: "Developer passionate about crafting accessible, pixel-perfect user interfaces",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Clausen | Portfolio",
    description: "Developer passionate about crafting accessible, pixel-perfect user interfaces",
  },
  icons: {
    icon: "/Turborepo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const theme = savedTheme === 'alucard' ? 'alucard' : 'dracula';
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('dracula');
                }
              })();
            `,
          }}
        />
        <ThemeProvider>
          <ThemeToggle />
          <SmoothScroll />
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let mouseX = 0;
                let mouseY = 0;
                let isMoving = false;
                
                function updateCursorPosition(e) {
                  mouseX = e.clientX;
                  mouseY = e.clientY;
                  isMoving = true;
                  
                  document.body.style.setProperty('--x', mouseX + 'px');
                  document.body.style.setProperty('--y', mouseY + 'px');
                  
                  clearTimeout(updateCursorPosition.timeout);
                  updateCursorPosition.timeout = setTimeout(() => {
                    isMoving = false;
                  }, 100);
                }
                
                document.addEventListener('mousemove', updateCursorPosition);
                
                // Hide bloom when mouse leaves window
                document.addEventListener('mouseleave', () => {
                  document.body.style.setProperty('--x', '-600px');
                  document.body.style.setProperty('--y', '-600px');
                });
                
                // Show bloom when mouse enters window
                document.addEventListener('mouseenter', (e) => {
                  updateCursorPosition(e);
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
