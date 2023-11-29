import Image from "next/image";
import React from "react";
import IconBtn from "./IconBtn";
import PlayerBtn from "./PlayerBtn";

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
          <IconBtn icon="shuffle" />
          <IconBtn icon="prev1" />
          <PlayerBtn secondaryButton />
          <IconBtn icon="next1" />
          <IconBtn icon="repeat" />
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
        <IconBtn icon="mic" />
        <IconBtn icon="list" />
        <IconBtn icon="conections" />
        <div className="flex items-center gap-2">
          <IconBtn icon="volume" />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 h-1 w-20 rounded-full" />
          </div>
        </div>
        <IconBtn icon="maximize" />
      </div>
    </footer>
  );
}
