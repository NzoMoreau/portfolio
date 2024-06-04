import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { AngularIcon } from "./icons/AngularIcon";
import { Code } from "./Code";
import { MySQLIcon } from "./icons/MySQLIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Compétences</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J'aime travailler avec ...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight mt-4">React</h3>
          <p className="text-sm text-muted-foreground">
            Je m'exerce actuellement sur <Code>React</Code> en pratiquant des
            tutos et d'autre mini projets. J'utilise aussi <Code>Next.js</Code>{" "}
            en framework backend et frontend.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <AngularIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight mt-4">
            Angular
          </h3>
          <p className="text-sm text-muted-foreground">
            Je développe depuis plus de <u>3 ans</u> maintenant sur{" "}
            <Code>Angular</Code> où j'ai pu voir de nombreux projets notamnent
            avec mon alternance chez <Code> Web & Co 2.0</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <MySQLIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight mt-4">MySQL</h3>
          <p className="text-sm text-muted-foreground">
            J'ai toujours utilisé <Code>MySQL</Code> pour tous les différents
            projets que j'ai eu depuis que j'ai commencer le développement il y
            a <u>5 ans</u>.
          </p>
        </div>
      </div>
    </Section>
  );
};
