import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className=" text-center text-sm text-slate-500 p-6">
      <p>
        Coded in
        <a
          href="https://code.visualstudio.com/"
          className="font-medium bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Vercel.
        </a>
      </p>
    </footer>
  );
};
