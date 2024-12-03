import { Brand } from "@/components/ui/brand";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export function Navigation() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b bg-background/60 backdrop-blur-md">
      <nav className="flex flex-row items-center justify-between px-4 mx-auto max-w-7xl h-14 lg:px-8">
        <Brand />
        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <Link
            href={"/about"}
            className={buttonVariants({
              variant: "peak",
              size: "sm",
              className: "text-base",
            })}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={buttonVariants({
              variant: "peak",
              size: "sm",
              className: "text-base",
            })}
          >
            Contact
          </Link>
          <Link
            href={"/create"}
            className={buttonVariants({
              size: "sm",
              className: "text-base",
            })}
          >
            Create
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
