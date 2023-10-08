import { FC } from "react";
import { Badge } from "./ui/badge";

export interface StackChipsInput {
  technologies: string[];
}

export const StackChips: FC<StackChipsInput> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-1 mt-4">
      {technologies.map((technology) => (
        <Badge key={technology} variant="secondary" className="min-w-max">
          {technology}
        </Badge>
      ))}
    </div>
  );
};
