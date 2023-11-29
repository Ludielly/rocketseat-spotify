import Image from "next/image";
import React from "react";
import PlayerBtn from "./PlayerBtn";

interface AlbumCardProps {
  albumSrc: string;
  albumName: string;
  artistName: string;
}

export default function AlbumCard({
  albumSrc,
  albumName,
  artistName,
}: AlbumCardProps) {
  return (
    <a
      href="#"
      className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col relative group"
    >
      <Image
      className="rounded-md"
        src={albumSrc}
        width={150}
        height={150}
        alt={`Capa do album ${albumName} de ${artistName}`}
      />
      <PlayerBtn albumButton />
      <strong className="font-semibold mt-2">{albumName}</strong>
      <span className="text-sm text-zinc-500">{artistName}</span>
    </a>
  );
}
