import { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { Badge } from "./ui/badge";

export interface StackChipsInput {
  technologies: string[];
}

export const StackChips: FC<StackChipsInput> = ({ technologies }) => {
  return (
    <div className="flex lg:justify-start flex-wrap justify-center gap-1 mt-4">
      {technologies.map((technology) => (
        <Badge key={technology} variant="secondary" className="min-w-max">
          {technology}
        </Badge>
      ))}
    </div>
  );
};
