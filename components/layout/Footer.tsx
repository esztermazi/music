"use client";

import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import NavbarItem from "../navbar/NavbarItem";
import { Twitter, Youtube } from "lucide-react";
import { RootState } from "@/store/store";

export default function Footer() {
  const username = useSelector((state: RootState) => state.user.user?.username);

  return (
    <footer className="w-full border-t">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Navbar>
          {username && <NavbarItem path={username} />}

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Twitter className="size-5" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Youtube className="size-5" />
          </a>
        </Navbar>
      </div>
    </footer>
  );
}
