import React from "react";
import AlbumCard from "./AlbumCard";
import PlaylistCard from "./PlaylistCard";
import IconBtn from "./IconBtn";
import SectionTitle from "./SectionTitle";

export default function Body() {
  return (
    <main className="flex-1 px-6 py-3">
      <div className="flex items-center gap-4">
        <IconBtn icon="prev2" bgColor="bg-black/40" />
        <IconBtn icon="next2" bgColor="bg-black/40" />
      </div>

      <h1 className="font-semibold text-2xl py-2">Boa tarde</h1>
      <div className="grid grid-cols-3 gap-4 pt-2">
        <PlaylistCard playlistSrc="/damn.jpg" playlistName="Damn" imageAlt="Capa do album Damn de Kendrick Lamar" />
        <PlaylistCard playlistSrc="/utopia.png" playlistName="Utopia" imageAlt="Capa do album Utopia de Travis Scott" />
        <PlaylistCard playlistSrc="/heroes-and-villains.jpg" playlistName="Heroes & Villains" imageAlt="Capa do album Heroes and Villains de Metro Boomin" />
        <PlaylistCard playlistSrc="/heroes-and-villains.jpg" playlistName="Heroes & Villains" imageAlt="Capa do album Heroes and Villains de Metro Boomin" />
        <PlaylistCard playlistSrc="/damn.jpg" playlistName="Damn" imageAlt="Capa do album Damn de Kendrick Lamar" />
        <PlaylistCard playlistSrc="/utopia.png" playlistName="Utopia" imageAlt="Capa do album Utopia de Travis Scott" />
      </div>

      <SectionTitle title="Feito para Lud" />
      <div className="grid grid-cols-6 gap-4 pt-4">
        <AlbumCard
          albumSrc="/damn.jpg"
          albumName="Damn"
          artistName="Kendrick Lamar"
        />
        <AlbumCard
          albumSrc="/heroes-and-villains.jpg"
          albumName="Heroes & Villains"
          artistName="Metro Boomin"
        />
        <AlbumCard
          albumSrc="/utopia.png"
          albumName="Utopia"
          artistName="Travis Scott"
        />
        <AlbumCard
          albumSrc="/damn.jpg"
          albumName="Damn"
          artistName="Kendrick Lamar"
        />
        <AlbumCard
          albumSrc="/heroes-and-villains.jpg"
          albumName="Heroes & Villains"
          artistName="Metro Boomin"
        />
        <AlbumCard
          albumSrc="/utopia.png"
          albumName="Utopia"
          artistName="Travis Scott"
        />
      </div>

      <SectionTitle title="Tocadas recentemente" />
      <div className="grid grid-cols-6 gap-4 pt-4">
        <AlbumCard
          albumSrc="/damn.jpg"
          albumName="Damn"
          artistName="Kendrick Lamar"
        />
        <AlbumCard
          albumSrc="/heroes-and-villains.jpg"
          albumName="Heroes & Villains"
          artistName="Metro Boomin"
        />
        <AlbumCard
          albumSrc="/utopia.png"
          albumName="Utopia"
          artistName="Travis Scott"
        />
        <AlbumCard
          albumSrc="/damn.jpg"
          albumName="Damn"
          artistName="Kendrick Lamar"
        />
        <AlbumCard
          albumSrc="/heroes-and-villains.jpg"
          albumName="Heroes & Villains"
          artistName="Metro Boomin"
        />
        <AlbumCard
          albumSrc="/utopia.png"
          albumName="Utopia"
          artistName="Travis Scott"
        />
      </div>
    </main>
  );
}
