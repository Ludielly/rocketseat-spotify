import { ListMusic, Maximize2, Mic2, MonitorSpeaker, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-zinc-900 border-t border-zinc-800 absolute w-full bottom-0">
      <div className="flex items-center gap-2">
        <Image
          src="/utopia.png"
          width={64}
          height={64}
          alt="Capa do album Utopia do Travis Scott"
        />
        <div className="flex flex-col">
          <strong className="text-sm">TELEKINESIS (feat. SZA & Future)</strong>
          <span className="text-xs text-zinc-500">
            Travis Scott, SZA, Future
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          <Shuffle size={18} />
          <SkipBack className="fill-zinc-200" size={18} />
          <button className="w-6 h-6 text-zinc-800 flex items-center justify-center pl-0.5 rounded-full bg-zinc-200">
            <Play className="fill-zinc-800" size={14} />
          </button>
          <SkipForward className="fill-zinc-200" size={18} />
          <Repeat size={18} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">4:15</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-72 h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-500">5:53</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mr-6">
        <Mic2 size={18} />
        <ListMusic size={20} />
        <MonitorSpeaker size={20} />
        <div className="flex items-center gap-2">
          <Volume2 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 h-1 w-20 rounded-full" />
          </div>
        </div>
        <Maximize2 size={18} />
      </div>
    </footer>
  );
}
