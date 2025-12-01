import Link from "next/link";
import NavbarItem from "./NavbarItem";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">MusicPortal</Link>
      </h1>
      <div className="flex items-center gap-6">
        <NavbarItem path="albums" />
        <NavbarItem path="reviews" />
        {children}
      </div>
    </nav>
  );
}
