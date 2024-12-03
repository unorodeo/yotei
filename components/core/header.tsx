import { Brand } from "@/components/ui/brand";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="sticky inset-x-0 top-0 w-full border-b bg-background">
      <nav className="flex flex-row items-center justify-between px-4 h-14">
        <Brand href="/create" />
      </nav>
    </header>
  );
};
