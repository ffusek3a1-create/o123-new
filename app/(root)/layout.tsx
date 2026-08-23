type RootRedirectLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootRedirectLayout({
  children,
}: RootRedirectLayoutProps) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}