import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <Section className="max-w-[85rem] py-24 space-y-8">
        <div className="flex justify-center">
          <div
            className={
              "inline-flex items-center p-2 text-sm text-muted-foreground hover:text-foreground transition-colors select-none bg-background border border-border rounded-lg"
            }
          >
            Currently in &mdash; beta
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="block text-4xl sm:text-5xl md:text-6xl">
            The Simple Theme Generator
          </h1>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="lead">
            Create new themes, Extend existing themes. Open source
          </div>
        </div>
      </Section>
    </>
  );
}

