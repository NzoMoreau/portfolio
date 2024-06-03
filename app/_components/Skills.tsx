import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { AngularIcon } from "./icons/AngularIcon";
import { Code } from "./Code";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight mt-4">React</h3>
          <p className="text-sm text-muted-foreground">
            C'est un langage que j'apprécie. Je m'exerce actuellement sur{" "}
            <Code>React</Code> en pratiquant des tutos et d'autre mini projets.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <AngularIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight mt-4">
            Angular
          </h3>
          <p className="text-sm text-muted-foreground">
            Je développe depuis plus de 3 ans maintenant sur{" "}
            <Code>Angular</Code> où j'ai pu <i>acquérir</i> un certain{" "}
            <u>niveau</u>.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight mt-4">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>
      </div>
    </Section>
  );
};
