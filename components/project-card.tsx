import { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  link?: string;
}

export const ProjectCard: FC<Project> = ({ title, description, link }) => {
  return (
    <Card className="w-full h-full cursor-pointer text-center lg:text-left rounded-xl">
      <CardHeader className="text-xl">{title}</CardHeader>
      <CardContent>
        {description}
        {link && (
          <div className="flex lg:justify-start justify-center items-center mt-4 bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 underline">
            <Link href={link} className="mr-2" target="_blank">
              Read More
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
