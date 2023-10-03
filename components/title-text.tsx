"use client";

import { FC } from "react";

export interface TitleTextProps {
  title: string;
  description?: string;
}

export const TitleText: FC<TitleTextProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col mt-4 text-center">
      <p className="text-5xl font-black">{title}</p>
      <p className="text-2xl font-normal">{description}</p>
    </div>
  );
};
