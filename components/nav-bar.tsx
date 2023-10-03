import Image from "next/image";
import { ModeToggle } from "./ui/mode-toggle";

export default function NavBar() {
  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between">
        <li>
          <span className="text-2xl font-bold">J.</span>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
