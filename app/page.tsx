import Header from "@/components/header";
import NavBar from "@/components/nav-bar";
import { Projects } from "@/components/projects";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={redHatDisplay.className}>
      <section className="flex flex-col lg:px-80 p-4">
        <NavBar />
        <Header />
        <Projects />
      </section>
    </main>
  );
}
