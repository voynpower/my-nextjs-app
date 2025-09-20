import Navigation from "./components/navigation"
export const metadata = {
  description: 'The Best Movies The Best Framework',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
