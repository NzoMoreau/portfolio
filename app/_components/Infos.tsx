import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Infos = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string;
}) => {
  const url = props.url || "#";

  return (
    <Link href={url} className={cn("w-full", props.className)}>
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="flex-shrink-0 relative w-10 h-10">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold truncate">{props.name}</p>
            <ArrowUpRight
              className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
              size={16}
            />
          </div>
          <p className="text-xs text-muted-foreground truncate">
            {props.description}
          </p>
        </div>
      </Card>
    </Link>
  );
};
