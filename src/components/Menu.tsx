import { Home as House, Library, Search } from 'lucide-react'
import React from 'react'

export default function Menu() {
  return (
    <aside className="w-64 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 py-10">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <House size={20} />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <Search size={20} />
              Search
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <Library size={20} />
              Your library
            </a>
          </nav>

          <nav className="flex flex-col gap-2 pt-10 border-t border-zinc-800">
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits Brasil
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              My playlist #10
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Barras the phato
            </a>
          </nav>
        </aside>
  )
}
