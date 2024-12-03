import { Section } from "@/components/ui/section";

interface Content {
  reason: string;
  explanation: string;
}

const WHY_CHOOSE_US: Content[] = [
  {
    reason: "Flexibility",
    explanation:
      "Yoteeei gives you full control to either extend existing themes or create entirely new ones.",
  },
  {
    reason: "Ease of Use",
    explanation:
      "Designed with both beginners and experienced developers in mind, the intuitive interface makes customization simple and efficient.",
  },
  {
    reason: "Community-Driven",
    explanation:
      "Yoteeei aligns with the open-source spirit, fostering creativity and innovation",
  },
  {
    reason: "Seamless Integration",
    explanation:
      "Enjoy smooth, hassle-free integrations, allowing you to focus on building without technical interruptions.",
  },
  {
    reason: "Independence",
    explanation:
      "Yoteeei is not bound by official limitations, offering a truly customizable experience outside the constraints of your core design.",
  },
];

const HOW_IT_WORKS: Content[] = [
  {
    reason: "Extend Existing Themes",
    explanation:
      "Easily add custom components, adjust colors, typography, and layouts to any theme.",
  },
  {
    reason: "Create Custom Themes",
    explanation:
      "Start from scratch and design a completely unique theme tailored to your project's needs.",
  },
  {
    reason: "User-Friendly Interface",
    explanation:
      "Intuitive controls allow you to make adjustments without the need for deep technical knowledge.",
  },
];

export default function About() {
  return (
    <>
      <Section className="py-6 max-w-3xl [&>p]:text-foreground/90">
        <p className="text-lg">
          Welcome to <span className="font-bold uppercase">Yoteeei</span>, your
          go-to tool for creating and managing themes with ease.
        </p>
        <p className="text-lg">
          A versatile extension tool designed to help you enhance and customize
          themes. Whether you are looking to modify an existing theme or build
          one from scratch.
        </p>
      </Section>
      <Section className="py-6 max-w-3xl [&>p]:text-foreground/90">
        <h2>Why Choose Us?</h2>
        <div className="mt-6">
          <ul className="md:list-decimal [&>li]:pl-4 space-y-4">
            {WHY_CHOOSE_US.map((item) => (
              <li
                key={item.reason}
                className="text-muted-foreground md:text-lg"
              >
                <span className="font-medium text-foreground">
                  {item.reason}:
                </span>{" "}
                {item.explanation}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section className="max-w-3xl py-6">
        <h2>How It Works</h2>
        <div className="mt-6">
          <ol className="md:list-decimal [&>li]:pl-4 space-y-4">
            {HOW_IT_WORKS.map((item) => (
              <li
                key={item.reason}
                className="text-muted-foreground md:text-lg"
              >
                <span className="font-medium text-foreground">
                  {item.reason}:
                </span>{" "}
                {item.explanation}
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <Section className="grid place-items-center">
        <p className="muted">
          Yoteeei is an independent tool created to enhance the themeing
          experience, contributing to the broader community.
        </p>
      </Section>
    </>
  );
}
