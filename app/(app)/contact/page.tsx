import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

export default function Contact() {
  return (
    <>
      <Section>
        <div className="mb-6">
          <h1>Wanna reach out to us?</h1>
        </div>
        <div className="flex items-center">
          <p className="text-muted-foreground">Contact us by email &mdash;</p>
          <Link
            href={"mailto:humanwhodreams@gmail.com"}
            className={cn(buttonVariants({ variant: "link", className: "text-base" }))}
          >
            Humanwhodreams@gmail.com
          </Link>
        </div>
      </Section>
    </>
  );
}
