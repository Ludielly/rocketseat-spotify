import { Play } from "lucide-react";
import React from "react";

interface PlayerBtnProps {
  secondaryButton?: boolean;
  albumButton?: boolean;
}

export default function PlayerBtn({
  secondaryButton,
  albumButton,
}: PlayerBtnProps) {
  const commonClassNames = "flex items-center justify-center pl-0.5 rounded-full";
  const primaryClassNames = "w-10 h-10 bg-green-400 text-black shadow-md shadow-zinc-800 invisible group-hover:visible";
  const albumClassNames = "absolute bottom-[4rem] right-4 group-hover:-translate-y-2 transition duration-300";
  const secondaryClassNames = "w-6 h-6 bg-zinc-200";
  return (
    <button
      className={`${commonClassNames} 
        ${!secondaryButton ? primaryClassNames : secondaryClassNames} 
        ${!secondaryButton ? albumButton ? albumClassNames : "ml-auto mr-4" : ""}
      `}
    >
      <Play
        className={!secondaryButton ? "fill-black" : "fill-zinc-800"}
        size={16}
      />
    </button>
  );
}
