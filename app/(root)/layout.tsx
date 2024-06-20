export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p className="text-whit-1">Left Sidebar</p>
        {children}
        <p className="text-whit-1">Right Sidebar</p>
      </main>
    </div>
  );
}
