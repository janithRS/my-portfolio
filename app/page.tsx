import { Experience } from "@/components/Experience";
import Header from "@/components/header";
import NavBar from "@/components/nav-bar";
import { Projects } from "@/components/projects";
import { Separator } from "@/components/ui/separator";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={redHatDisplay.className}>
      <section className="flex flex-col lg:px-72 p-4 mt-14">
        <NavBar />
        <Header />
        {/* <Separator className="my-1 px-5" /> */}
        <Projects />
        {/* <Experience /> */}
      </section>
    </main>
  );
}
