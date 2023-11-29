import Image from 'next/image'
import React from 'react'
import PlayerBtn from './PlayerBtn'

interface PlaylistCardProps {
    playlistSrc: string;
    playlistName: string;
    imageAlt: string;
}

export default function PlaylistCard({playlistSrc, playlistName, imageAlt}: PlaylistCardProps) {
  return (
    <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src={playlistSrc}
            width={64}
            height={64}
            alt={imageAlt}
          />
          <strong>{playlistName}</strong>
          <PlayerBtn />
        </a>
  )
}
