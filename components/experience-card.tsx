import { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

export interface ExperienceProps {
  company: string;
  title: string;
  description: string;
  img?: string;
  startYr?: string;
  endYr?: string;
}

export const ExperienceCard: FC<ExperienceProps> = ({
  title,
  company,
  description,
  startYr,
  endYr,
  img,
}) => {
  return (
    <Card className="w-full h-full cursor-pointer text-left rounded-xl shadow-none">
      <CardHeader className="flex flex-row font-normal text-base items-start justify-between">
        <div>
          <span className="font-semibold">{company} </span> ·{" "}
          <span className="text-gray-400">{title}</span>
          <div className="text-xs text-gray-400 uppercase">
            {startYr} - {endYr}
          </div>
        </div>
        {img && <Image src={`/${img}`} alt={img} width={60} height={60} />}
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>
    </Card>
  );
};
