import type { Metadata } from "next";

const mnMessages = {
  mn: {
    Yes: "Тийм",
    No: "Үгүй",
    Search: "Хайх...",
  }
};

export const metadata: Metadata = {
  title: "Smart Admin",
  description: "Системийн хяналтын самбар",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        minHeight: "100vh",
        backgroundColor: "#f8fafc", 
        color: "#0f172a",
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility"
      }}>
        {children}
      </body>
    </html>
  );
}