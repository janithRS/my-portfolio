"use client";

import { useGetMediumPosts } from "@/api/posts/use-get-medium-posts";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Card, CardHeader } from "./ui/card";

export const LatestBlogs: FC = () => {
  const { data: posts } = useGetMediumPosts();

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col mt-1 lg:w-full justify-center w-full p-6 rounded-3xl">
        <div className="flex items-center flex-row gap-1 mb-5">
          <p className="lg:text-2xl text-xl font-bold">Blogs</p>
          <div className="w-full h-[0.5px] bg-gray-200 dark:bg-gray-800 ml-3 mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-flow-row-dense gap-3">
          {posts &&
            posts.items.slice(0, 2).map((post) => (
              <Card
                key={post.guid}
                className="flex flex-col w-full h-full cursor-pointer rounded-xl shadow-none"
              >
                <Image
                  src={post.thumbnail}
                  alt={post.thumbnail}
                  width={500}
                  height={100}
                  className="rounded-xl w-full items-center justify-center p-2"
                />
                <CardHeader className="font-normal text-base -mt-5">
                  {post.title}
                  <div className="flex mt-4 bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 underline">
                    <Link href={post.link} className="mr-2" target="_blank">
                      Continue Reading
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}

          <Card className="flex text-center w-full h-full cursor-pointer justify-center items-center rounded-xl border-0 shadow-none mt-5 lg:mt-0">
            <Link
              className="flex flex-row items-center gap-1 hover:gap-2"
              target="_blank"
              href="https://medium.com/@janithrs"
            >
              Read More Blogs <FaChevronRight />
            </Link>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
