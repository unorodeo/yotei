import { Section } from "@/components/ui/section";
import { siteConfig } from "@/site.config";

export default function Home() {
  return (
    <>
      <Section className="max-w-[85rem] py-24 space-y-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="block text-4xl sm:text-5xl">
            create and manage shadcn/ui themes with ease.
          </h1>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="lead">
            Your{" "}
            <span className="bg-muted p-1 rounded-md border-2">
              &ndash;&ndash;tokens
            </span>{" "}
            for your design system with {siteConfig.name}.
          </div>
        </div>
      </Section>
    </>
  );
}

