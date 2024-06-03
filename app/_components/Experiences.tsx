import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export type ExperiencesProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  badge: string;
};

export const Experiences = (props: ExperiencesProps) => {
  return (
    <div>
      <Link
        href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      >
        <img
          src={props.image}
          alt={props.title}
          className="w-10 h-10 object-contain rounded-full"
        />

        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.title}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.role}</p>
        </div>
        <div className="ml-auto">
          <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </div>
        <Badge variant={"outline"}>{props.badge}</Badge>
      </Link>
    </div>
  );
};
