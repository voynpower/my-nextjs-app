import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Loading...'
  }
}
export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; Next.Js is Great!
    </div>
  );
}
