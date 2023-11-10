import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export const StickyBanner = () => {
  const handleBannerClose = () => {
    const banner = document.getElementById("banner");
    banner?.remove();
  };

  return (
    <motion.div
      id="banner"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="hidden lg:flex justify-center z-50 w-full  py-3 bg-gradient-to-r from-pink-500 to-yellow-500"
    >
      <div className="flex text-sm items-center text-center text-white">
        Hey there! Check out my latest videos on{" "}
        <Link
          className="font-bold flex mx-1 items-center"
          href="https://www.youtube.com/@kathabus"
          target="_blank"
        >
          YouTube
          <FaExternalLinkSquareAlt />
        </Link>{" "}
        and listen to my podcast on{" "}
        <Link
          className="font-bold flex ml-1 items-center"
          target="_blank"
          href="https://podcasters.spotify.com/pod/show/kathabus/episodes/ep-e1dla5j"
        >
          Spotify <FaExternalLinkSquareAlt />
        </Link>
        <button
          className="absolute right-4 hover:text-gray-100"
          onClick={handleBannerClose}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-6 w-6 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
