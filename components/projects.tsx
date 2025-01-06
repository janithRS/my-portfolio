"use client";

import { motion } from "framer-motion";
import { Project, ProjectCard } from "./project-card";
import { FC } from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export const projectsList: Project[] = [
  {
    title: "Paylocity Payroll",
    description:
      "Payroll platform for Paylocity, a US employee benefits company.",
    link: "https://www.paylocity.com/",
    technologies: [
      "React",
      "React Query",
      "TypeScript",
      "React Hooks",
      "React Testing Library",
      "Functional Components",
    ],
  },
  {
    title: "GVC Gaesco",
    description:
      "Financial platform for GVC Gaesco, a Spanish financial services company.",
    link: "https://gvcgaesco.es/es/inversion/",
    technologies: [
      "React",
      "C#",
      "ASP.NET",
      "SQL Server",
      "React Query",
      "TypeScript",
      "React Hooks",
      "React Testing Library",
      "YUP",
      "Functional Components",
    ],
  },
  {
    title: "Native flow",
    description:
      "Multi lingual communication platform powered by an AI translation engine.",
    link: "https://native.tech/",
    technologies: [
      "React",
      "SignalR",
      "mono-repo",
      "React Query",
      "Next.js",
      "TypeScript",
      "React Hooks",
      "React Testing Library",
      "YUP",
      "Material UI",
      "Functional Components",
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
      "Functional Components",
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
      "A web application developed to manage the student information of the National Institute of Education, Sri Lanka.",
    technologies: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "WSO2 Stream processor",
    description:
      "An open source, scalable, and cloud native stream processing platform from WSO2",
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
      <div className="flex flex-col lg:w-full justify-center lg:justify-between lg:text-left text-center w-full rounded-3xl pb-6">
        <div className="flex items-center flex-row gap-1 mb-5">
          <p className="lg:text-2xl text-xl font-bold">Projects</p>
          <div className="w-full h-[0.5px] bg-gray-200 dark:bg-gray-800 ml-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-flow-row-dense gap-3">
          {projectsList.length > 0 &&
            projectsList
              .slice(0, 5)
              .map(({ title, description, link, technologies }, index) => (
                <ProjectCard
                  key={title}
                  description={description}
                  title={title}
                  link={link}
                  technologies={technologies}
                  isLatest={index === 0}
                />
              ))}
          <Card className="flex text-center w-full h-full cursor-pointer justify-center items-center rounded-xl border-0 shadow-none mt-5 lg:mt-0">
            <Link
              className="flex flex-row items-center gap-1 hover:gap-2"
              target="_blank"
              href="https://www.linkedin.com/in/janithrs/"
            >
              View LinkedIn <FaChevronRight />
            </Link>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
