import { Home as House, Library, Search } from "lucide-react";
import React from "react";
import NavItems from "./NavItems";

export default function Menu() {
  return (
    <aside className="w-64 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 pt-10 pb-6">
        <NavItems icon="home" text="Home" />
        <NavItems icon="search" text="Buscar" />
        <NavItems icon="library" text="Sua biblioteca" />
      </nav>

      <nav className="flex flex-col gap-2 pt-6 border-t border-zinc-800">
      <NavItems text="Hot Hits Brasil" />
      <NavItems text="My playlist #12" />
      <NavItems text="Top Brasil" />
      <NavItems text="My playlist #10" />
      </nav>
    </aside>
  );
}
