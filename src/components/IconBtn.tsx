import {
  ChevronLeft,
  ChevronRight,
  ListMusic,
  Maximize2,
  Mic2,
  MonitorSpeaker,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import React from "react";

interface IconBtnProps {
  icon: string;
  bgColor?: string;
}

export default function IconBtn({ icon, bgColor }: IconBtnProps) {
  let iconBtn;
  switch (icon) {
    case "shuffle":
      iconBtn = <Shuffle width={18} />;
      break;
    case "prev1":
      iconBtn = <SkipBack className="fill-zinc-200" width={18} />;
      break;
    case "next1":
      iconBtn = <SkipForward className="fill-zinc-200" width={18} />;
      break;
    case "repeat":
      iconBtn = <Repeat width={18} />;
      break;
    case "mic":
      iconBtn = <Mic2 width={18} />;
      break;
    case "list":
      iconBtn = <ListMusic width={18} />;
      break;
    case "conections":
      iconBtn = <MonitorSpeaker width={18} />;
      break;
    case "volume":
      iconBtn = <Volume2 width={18} />;
      break;
    case "maximize":
      iconBtn = <Maximize2 width={16} />;
      break;
    case "prev2":
      iconBtn = <ChevronLeft width={18} height={18} />;
      break;
    case "next2":
      iconBtn = <ChevronRight width={18} height={18} />;
      break;
    default:
      break;
  }
  return (
    <button
      className={`rounded-full p-1 ${!bgColor ? "bg-transparent" : bgColor}`}
    >
      {iconBtn}
    </button>
  );
}
