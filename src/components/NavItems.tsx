import { Disc3, Home, Library, Search } from "lucide-react";
import React from "react";

interface NavItemsProps {
    icon?: string;
    text: string;
}

export default function NavItems({icon, text}: NavItemsProps) {
    let navIcon
    switch (icon) {
        case "home":
            navIcon = <Home size={20} />
            break;
        case "search":
            navIcon = <Search size={20} />
            break;
        case "library":
            navIcon = <Library size={20} />
            break;
        default:
            break;
    }
  return (
    <a href="#" className={`flex items-center gap-2 text-sm ${icon ? "font-semibold" : "text-zinc-400 hover:text-zinc-100"}`}>
      {icon ? navIcon : (<Disc3 size={16} />)}
      {text}
    </a>
  );
}
