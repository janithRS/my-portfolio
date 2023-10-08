import { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { StackChips } from "./stack-chips";

export interface Project {
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
  isLatest?: boolean;
}

export const ProjectCard: FC<Project> = ({
  title,
  description,
  link,
  technologies,
  isLatest,
}) => {
  return (
    <Card className="w-full h-full cursor-pointer text-left lg:text-left rounded-xl shadow-none">
      {isLatest && (
        <div className="flex justify-end -mb-4">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 px-2 py-1 text-sm text-white font-semibold rounded-tr-lg rounded-bl-lg">
            Latest
          </div>
        </div>
      )}
      <CardHeader className="font-semibold text-base -mb-3">{title}</CardHeader>
      <CardContent className="text-sm">
        <div className="mb-4">{description}</div>
        {technologies && <StackChips technologies={technologies} />}
        {link && (
          <div className="flex mt-4 bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 underline">
            <Link href={link} className="mr-2" target="_blank">
              Read More
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
