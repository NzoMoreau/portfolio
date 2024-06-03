import { Section } from "./Section";
import Link from "next/link";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Enzo Moreau
        </h2>
        <h3 className="text-3xl font-caption">Développeur Full Stack</h3>
        <p className="text-base">
          Alternant en tant que{" "}
          <Code className="inline-flex items-center gap-1">
            🧑🏻‍💻 Développeur Full Stack
          </Code>
          , actuellement chez{" "}
          <Link href="https://www.webandco2-0.fr/">
            <Code className="inline-flex items-center gap-1">
              <img
                src="/img/WebandCoImg.png"
                className="rounded-full size-5 p-0"
              />
              Web and Co 2.0
            </Code>
          </Link>{" "}
          depuis 3 ans. J'habite à{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="/img/FranceImg.png"
              style={{ width: 16, height: "auto" }}
              alt="Drapeaux Français"
            />
            Paris
          </Code>
          .
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="/img/PPImg.jpg"
          className="w-full h-auto max-w-xs rounded-full max-md:w-56"
          alt="Photo d'Enzo"
        />
      </div>
    </Section>
  );
};
