const mnMessages = {
  mn: {
    Yes: "Тийм",
    No: "Үгүй",
    Search: "Хайх...",
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}