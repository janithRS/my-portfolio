"use client";

import { ModeToggle } from "./ui/mode-toggle";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NavBar() {
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      link: "https://instagram.com/janithrs",
    },
    {
      name: "Github",
      icon: <FaGithub size={20} />,
      link: "https://github.com/janithRS",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={20} />,
      link: "https://twitter.com/janithrs",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/in/janithrs/",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full lg:px-72 p-6 pt-4 dark:bg-slate-950 bg-white">
      <ul className="flex items-center justify-between">
        <li>
          <motion.span
            initial={{ opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            JanithRS.
          </motion.span>
        </li>
        <li className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 border dark:border-white border-black px-3 py-2 rounded-full"
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + Math.random() * 0.5 }}
                className="flex items-center gap-2"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
