import Header from "@/components/header";
import NavBar from "@/components/nav-bar";
import { TitleText } from "@/components/title-text";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={redHatDisplay.className}>
      <section className="flex flex-col lg:px-96 p-4">
        <NavBar />
        <Header />
        {/* <TitleText title="About Me" /> */}
      </section>
    </main>
  );
}
