"use client";

import { motion } from "framer-motion";
import { Project, ProjectCard } from "./project-card";
import { FC } from "react";

export const projectsList: Project[] = [
  {
    title: "Native flow",
    description:
      "Multi lingual communication platform powered by AI translation engine.",
    link: "https://native.tech/",
    technologies: [
      "React",
      "SignalR",
      "React Query",
      "Next.js",
      "TypeScript",
      "React Hooks",
      "React Testing Library",
      "YUP",
      "Material UI",
      "Function Components",
    ],
  },
  {
    title: "Choreo",
    description:
      "All-in-one platform to develop and manage APIs, integrations, and digital services.",
    link: "https://wso2.com/choreo/",
    technologies: [
      "React",
      "React Query",
      "MSW",
      "Material UI",
      "Function Components",
      "TypeScript",
      "React Hooks",
      "GraphQL",
      "React Testing Library",
      "RXJS",
      "YUP",
      "Swagger UI",
    ],
  },
  {
    title: "Diabipal",
    description:
      "A smart mobile application which predicts diabetes and cardiovascular diseases using ML and OCR technologies.",
    technologies: [
      "Ionic Framework",
      "Python",
      "Tensorflow",
      "Keras",
      "Flask",
      "OCR",
    ],
  },
  {
    title: "NEMIS - SIS",
    description:
      "A web application which manage the student information system of the National Institute of Education, Sri Lanka.",
    technologies: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "WSO2 Stream processor",
    description: "A real-time streaming data analysis platform.",
    link: "https://wso2.com/streaming-integrator/",
    technologies: ["Javascript", "Enjoy Hints"],
  },
];

export const Projects: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col lg:w-full justify-center lg:justify-between lg:text-left text-center w-full p-6 rounded-3xl">
        <div className="flex items-center flex-row gap-1 mb-5">
          <p className="lg:text-2xl text-xl font-bold">Projects</p>
          <div className="w-full h-[0.5px] bg-gray-200 dark:bg-gray-800 ml-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-flow-row-dense gap-3">
          {projectsList.length > 0 &&
            projectsList.map(({ title, description, link, technologies }) => (
              <ProjectCard
                key={title}
                description={description}
                title={title}
                link={link}
                technologies={technologies}
                isLatest={title === "Native flow"}
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
};
