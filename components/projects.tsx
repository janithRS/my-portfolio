"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Project, ProjectCard } from "./project-card";
import { FC } from "react";

export const projectsList: Project[] = [
  {
    title: "Next.js",
    description: "The React Framework for Production",
    link: "https://nextjs.org/",
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces",
    link: "https://reactjs.org/",
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "GraphQL",
    description:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
    link: "https://graphql.org/",
  },
];

export const Projects: FC = () => {
  return (
    <Card className="flex flex-col -pr-12 mt-4 lg:items-start lg:w-full items-center justify-center lg:justify-between lg:text-left text-center w-full p-6 rounded-3xl">
      <div className="flex flex-col gap-1 mb-5">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="lg:text-5xl text-4xl font-bold">Projects</p>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-3">
        {projectsList.length > 0 &&
          projectsList.map(({ title, description, link }) => (
            <ProjectCard
              key={title}
              description={description}
              title={title}
              link={link}
            />
          ))}
      </div>
    </Card>
  );
};
