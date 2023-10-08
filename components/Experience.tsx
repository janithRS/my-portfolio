"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { ExperienceCard, ExperienceProps } from "./experience-card";
import { Card } from "./ui/card";

export const experienceList: ExperienceProps[] = [
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
    startYr: "2021 Aug",
    endYr: "2022 Jul",
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
    title: "Software Engineering Intern",
    description:
      "Developed a user-friendly front-end guided tour for the WSO2 Stream Processor and designed and implemented a highly customizable front-end test framework using Selenium.",
    img: "WSO2-logo.png",
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
      <div className="flex flex-col mt-1 lg:items-start lg:w-full items-center justify-center lg:justify-between lg:text-left text-center w-full p-6 rounded-3xl">
        <div className="flex flex-col gap-1 mb-5">
          <p className="lg:text-2xl text-xl font-bold">Experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-flow-row-dense gap-3">
          {experienceList.length > 0 &&
            experienceList.map(
              ({ title, description, img, company, endYr, startYr }) => (
                <ExperienceCard
                  key={title}
                  company={company}
                  description={description}
                  title={title}
                  img={img}
                  endYr={endYr}
                  startYr={startYr}
                />
              )
            )}
          <Card className="flex text-center w-full h-full cursor-pointer justify-center items-center rounded-xl border-0">
            <Link
              className="flex flex-row items-center gap-1 hover:gap-2"
              target="_blank"
              href="https://drive.google.com/file/d/17MBW-12UX4TDRnwH8OcOGIZ63lH2r9HT/view?usp=sharing"
            >
              View Full Résumé <FaChevronRight />
            </Link>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
