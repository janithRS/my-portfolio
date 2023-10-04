"use client";

import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Project, ProjectCard } from "./project-card";
import { FC } from "react";

export const projectsList: Project[] = [
  {
    title: "Native flow",
    description:
      "Multi lingual communication platform powered by AI translation engine.",
    link: "https://native.tech/",
  },
  {
    title: "Choreo",
    description:
      "All-in-one platform to Cloud Native Engineering for API Developers.",
    link: "https://wso2.com/choreo/",
  },
  {
    title: "Diabipal",
    description:
      "A smart mobile application developed to predict diabetes and cardiovascular diseases using ML and OCR technologies.",
  },
  {
    title: "NEMIS - SIS",
    description:
      "A web application developed to manage the student information system of the National Institute of Education, Sri Lanka.",
  },
  {
    title: "WSO2 Stream processor",
    description:
      "A real-time streaming processor for analyzing and processing events in real-time.",
    link: "https://wso2.com/streaming-integrator/",
  },
];

export const Projects: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="flex flex-col -pr-12 mt-4 lg:items-start lg:w-full items-center justify-center lg:justify-between lg:text-left text-center w-full p-7 rounded-3xl">
        <div className="flex flex-col gap-1 mb-5">
          <p className="lg:text-4xl text-3xl font-bold">Projects</p>
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
    </motion.div>
  );
};
