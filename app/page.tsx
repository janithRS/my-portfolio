"use client";

import { Contact } from "@/components/contact";
import { Experience } from "@/components/experiences";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { LatestBlogs } from "@/components/latest-blogs";
import NavBar from "@/components/nav-bar";
import { Projects } from "@/components/projects";
import { Red_Hat_Display } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={redHatDisplay.className}>
        <section className="flex flex-col xl:px-52 lg:px-40 2xl:px-72 p-4 mt-14">
          <NavBar />
          <Header />
          <Experience />
          <Projects />
          <LatestBlogs />
          <Contact />
          <Footer />
        </section>
      </main>
    </QueryClientProvider>
  );
}
