"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import {Add} from "./add";
import { Search } from "./search";
import { useState } from "react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const default_style = "text-muted-foreground";
  const selected = "bg-gray-600 rounded";
  const pad = "p-2"
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="border-b bg-secondary">
      <div className="flex h-16 items-center px-4 justify-between">
        <nav
          className={cn("flex items-center gap-10 mx-6", className)}
          {...props}
        >
          <Link
            href="/"
            className={`text-sm font-medium ${activeLink=="/"?selected:default_style} transition-colors hover:text-primary`}
            onClick={() => handleLinkClick("/")}
          >
             <span className={activeLink=="/"?pad:""}>Dashboard</span>
          </Link>
          <Link
            href="/movies"
            className={`text-sm font-medium ${activeLink=="/movies"?selected:default_style} transition-colors hover:text-primary`}
            onClick={() => handleLinkClick("/movies")}
          >
             <span className={activeLink=="/movies"?pad:""}>Movies</span>
          </Link>
          <Link
            href="/series"
            className={`text-sm font-medium ${activeLink=="/series"?selected:default_style} transition-colors hover:text-primary`}
            onClick={() => handleLinkClick("/series")}
          >
             <span className={activeLink=="/series"?pad:""}>Series</span>
          </Link>
          <Link
            href="/anime"
            className={`text-sm font-medium ${activeLink=="/anime"?selected:default_style} transition-colors hover:text-primary`}
            onClick={() => handleLinkClick("/anime")}
          >
             <span className={activeLink=="/anime"?pad:""}>Anime</span>
          </Link>
          <Link
            href="/recommendation"
            className={`text-sm font-medium ${activeLink=="/recommendation"?selected:default_style} transition-colors hover:text-primary`}
            onClick={() => handleLinkClick("/recommendation")}
          >
             <span className={activeLink=="/recommendation"?pad:""}>Recommendations</span>
          </Link>
          <Link
            href="/login"
            className={`text-sm font-medium ${activeLink=="/links"?selected:default_style} transition-colors hover:text-primary`}
            onClick={() => handleLinkClick("/login")}
          >
             <span className={activeLink=="/links"?pad:""}>Links</span>
          </Link>
          <div>
            <Add/>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <div className="ml-6">
            <Search/>
          </div>
          <div>
            <ThemeToggle/>
          </div>
        </div>
      </div>
    </div>
  );
}
