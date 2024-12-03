import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-full bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
