"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { ExperienceCard, ExperienceProps } from "./experience-card";
import { Card } from "./ui/card";

export const experienceList: ExperienceProps[] = [
  {
    company: "FNZ",
    title: "Frontend Engineer",
    description:
      "Transforming financial complexities into seamless user experiences through expertise in fintech front-end technologies..",
    img: "FNZ-logo.jpg",
    startYr: "2023 Jan",
    endYr: "Present",
  },
  {
    company: "Native",
    title: "Frontend Engineer",
    description:
      "Developed and styled the Native flow web application from scratch including SignalR integration for real-time communication.",
    img: "native-logo.png",
    startYr: "2022 Aug",
    endYr: "2023 oct",
  },
  {
    company: "WSO2",
    title: "Software Engineer",
    description:
      "Collaborated with other engineers to develop the Choreo web application and build the GraphQL API.",
    img: "wso2-logo.png",
    startYr: "2020 Dec",
    endYr: "2023 Jul",
  },
  {
    company: "SEF",
    title: "Chief Design Officer",
    description:
      "Managed the design team and collaborated closely with the engineering team to produce exceptional UI designs and compelling social media content.",
    img: "SEF-logo.png",
    startYr: "2018 JUN",
    endYr: "2021 Jun",
  },
  {
    company: "LSF",
    title: "Jr. Software Engineer",
    description:
      "Played a pivotal role in the development of the Student Information System (SIS), with a specific focus on crafting its user interface (UI). ",
    img: "LSF-logo.jpg",
    startYr: "2020 Jan",
    endYr: "2020 Nov",
  },
  {
    company: "WSO2",
    title: "Intern",
    description:
      "Developed a user-friendly front-end guided tour for the WSO2 Stream Processor and designed and implemented a highly customizable front-end test framework using Selenium.",
    img: "wso2-logo.png",
    startYr: "2018 Dec",
    endYr: "2019 Jun",
  },
];

export const Experience: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col mt-1 lg:w-full justify-center lg:justify-between lg:text-left text-center w-full rounded-3xl pb-6">
        <div className="flex items-center flex-row gap-1 mb-5">
          <p className="lg:text-2xl text-xl font-bold">Experience</p>
          <div className="w-full h-[0.5px] bg-gray-200 dark:bg-gray-800 ml-3 mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-flow-row-dense gap-3">
          {experienceList.length > 0 &&
            experienceList
              .slice(0, 5)
              .map(({ title, description, img, company, endYr, startYr }) => (
                <ExperienceCard
                  key={title}
                  company={company}
                  description={description}
                  title={title}
                  img={img}
                  endYr={endYr}
                  startYr={startYr}
                />
              ))}
          <Card className="flex text-center w-full h-full cursor-pointer justify-center items-center rounded-xl border-0 shadow-none mt-5 lg:mt-0">
            <Link
              className="flex flex-row items-center gap-1 hover:gap-2"
              target="_blank"
              href="https://drive.google.com/file/d/1ywiuNht8GvxuJ81oxZevEEcDRzvoTstp/view?usp=sharing"
            >
              View Full Résumé <FaChevronRight />
            </Link>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
