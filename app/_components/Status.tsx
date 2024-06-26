import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Code,
  Contact,
  MessageCircle,
  Rss,
  StickyNote,
  User,
} from "lucide-react";
import { Projets, ProjetsProps } from "./Projets";
import { Experiences, ExperiencesProps } from "./Experiences";
import { Infos } from "./Infos";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground">Projets personnels</p>
          <div className="flex flex-col gap-4">
            {PROJETS.map((projets, index) => (
              <Projets
                key={index}
                Logo={projets.Logo}
                title={projets.title}
                description={projets.description}
                url={projets.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Expériences</p>
          <div className="flex flex-col gap-4">
            {EXPERIENCES.map((experiences, index) => (
              <Experiences key={index} {...experiences} />
            ))}
          </div>
        </Card>
        {/* <Card className="p-4 flex-1 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground">Infos</p>
          <Infos
            name="Enzo"
            image="/img/PPImg.jpg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="test"
          />
          <Infos
            name="Enzo"
            image="/img/PPImg.jpg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="test"
          />
        </Card> */}
      </div>
    </Section>
  );
};

const PROJETS: ProjetsProps[] = [
  {
    Logo: Contact,
    title: "Portfolio",
    description:
      "Site en React afin de présenter mon parcours tout en apprenant le langage.",
    url: "https://github.com/NzoMoreau/portfolio",
  },
];

const EXPERIENCES: ExperiencesProps[] = [
  {
    image: "/img/WebandCoImg.png",
    title: "Web & Co 2.0",
    role: "Développeur Full Stack",
    date: "2021 - Present",
    url: "https://www.webandco2-0.fr/",
    badge: "Alternance",
  },
  {
    image: "/img/CerfranceImg.png",
    title: "Cerfrance",
    role: "Développeur",
    date: "2021",
    url: "https://www.cerfrance.fr/",
    badge: "Stage",
  },
];
