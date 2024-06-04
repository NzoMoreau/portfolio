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
          url="tel:0652524562"
          name="06-52-52-45-62"
          image="/img/PPImg.jpg"
          mediumImage="/img/PhoneIOSImg.png"
          description="Contactez-moi"
        />
        <Infos
          className="flex-1"
          url="mailto:enzo.moreau1710@gmail.com"
          name="enzo.moreau1710@gmail.com"
          image="/img/PPImg.jpg"
          mediumImage="/img/MailIOSImg.png"
          description="Envoyer moi un mail"
        />
        <Infos
          className="flex-1"
          url=""
          name="31 rue letort"
          image="/img/PPImg.jpg"
          mediumImage="/img/LocaliserIOSImg.png"
          description="Localisation à Paris 18"
        />
      </div>
    </Section>
  );
};
