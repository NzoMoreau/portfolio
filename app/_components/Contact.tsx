import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { AngularIcon } from "./icons/AngularIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { Infos } from "./Infos";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contactez-moi</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je serais ravi de travailler avec vous ...
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <Infos
          className="flex-1"
          url="https://twitter.com/NzoMoreauDev"
          name="Enzo"
          image="/img/PPImg.jpg"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="test"
        />
        <Infos
          className="flex-1"
          url="https://fr.linkedin.com/in/enzo-moreau-516701208"
          name="Enzo"
          image="/img/PPImg.jpg"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="test"
        />
        <Infos
          className="flex-1"
          url="mailto:enzo.moreau1710@gmail.com"
          name="c@gmail.com"
          image="/img/PPImg.jpg"
          mediumImage="/img/EmailImg.png"
          description="envoyer moi un mail"
        />
      </div>
    </Section>
  );
};
