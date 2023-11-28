import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Body() {
  return (
    <main className="flex-1 px-6 py-3">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft size={20} />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight size={20} />
            </button>
          </div>

          <h1 className="font-semibold text-2xl py-2">Boa tarde</h1>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/damn.jpg"
                width={64}
                height={64}
                alt="Capa do album Damn do Kendrick Lamar"
              />
              <strong>Damn</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 invisible group-hover:visible">
                <Play fill="#000" size={16} />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/utopia.png"
                width={64}
                height={64}
                alt="Capa do album Utopia do Travis Scott"
              />
              <strong>Utopia</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 invisible group-hover:visible">
                <Play fill="#000" size={16} />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/heroes-and-villains.jpg"
                width={64}
                height={64}
                alt="Capa do album Heroes & Villains do Metro Boomin"
              />
              <strong>Heroes & Villains</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 invisible group-hover:visible">
                <Play fill="#000" size={16} />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/utopia.png"
                width={64}
                height={64}
                alt="CaCapa do album Utopia do Travis Scott"
              />
              <strong>Utopia</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 invisible group-hover:visible">
                <Play fill="#000" size={16} />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/heroes-and-villains.jpg"
                width={64}
                height={64}
                alt="Capa do album Heroes & Villains do Metro Boomin"
              />
              <strong>Heroes & Villains</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 invisible group-hover:visible">
                <Play fill="#000" size={16} />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/damn.jpg"
                width={64}
                height={64}
                alt="Capa do album Damn do Kendrick Lamar"
              />
              <strong>Damn</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 invisible group-hover:visible">
                <Play fill="#000" size={16} />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-xl pt-4">Feito para Lud</h2>

          <div className="grid grid-cols-6 gap-4 pt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                src="/damn.jpg"
                width={150}
                height={150}
                alt="Capa do album Damn do Kendrick Lamar"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Damn</strong>
              <span className="text-sm text-zinc-500">Kendrick Lamar</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/heroes-and-villains.jpg"
                width={150}
                height={150}
                alt="Capa do album Heroes & Villains do Metro Boomin"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Heroes & Villains</strong>
              <span className="text-sm text-zinc-500">Metro Boomin</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/utopia.png"
                width={150}
                height={150}
                alt="Capa do album Utopia do Travis Scott"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Utopia</strong>
              <span className="text-sm text-zinc-500">Travis Scott</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/damn.jpg"
                width={150}
                height={150}
                alt="Capa do album Damn do Kendrick Lamar"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Damn</strong>
              <span className="text-sm text-zinc-500">Kendrick Lamar</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/heroes-and-villains.jpg"
                width={150}
                height={150}
                alt="Capa do album Heroes & Villains do Metro Boomin"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Heroes & Villains</strong>
              <span className="text-sm text-zinc-500">Metro Boomin</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/utopia.png"
                width={150}
                height={150}
                alt="Capa do album Utopia do Travis Scott"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Utopia</strong>
              <span className="text-sm text-zinc-500">Travis Scott</span>
            </a>
          </div>

          <h2 className="font-semibold text-xl pt-4">Tocados recentemente</h2>

          <div className="grid grid-cols-6 gap-4 pt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                src="/damn.jpg"
                width={150}
                height={150}
                alt="Capa do album Damn do Kendrick Lamar"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Damn</strong>
              <span className="text-sm text-zinc-500">Kendrick Lamar</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/heroes-and-villains.jpg"
                width={150}
                height={150}
                alt="Capa do album Heroes & Villains do Metro Boomin"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Heroes & Villains</strong>
              <span className="text-sm text-zinc-500">Metro Boomin</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/utopia.png"
                width={150}
                height={150}
                alt="Capa do album Utopia do Travis Scott"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Utopia</strong>
              <span className="text-sm text-zinc-500">Travis Scott</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/damn.jpg"
                width={150}
                height={150}
                alt="Capa do album Damn do Kendrick Lamar"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Damn</strong>
              <span className="text-sm text-zinc-500">Kendrick Lamar</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/heroes-and-villains.jpg"
                width={150}
                height={150}
                alt="Capa do album Heroes & Villains do Metro Boomin"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Heroes & Villains</strong>
              <span className="text-sm text-zinc-500">Metro Boomin</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1 relative group"
            >
              <Image
                className="w-full"
                src="/utopia.png"
                width={150}
                height={150}
                alt="Capa do album Utopia do Travis Scott"
              />
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 shadow-md shadow-zinc-800 absolute bottom-[4rem] -right-2 invisible group-hover:visible group-hover:-translate-y-2 transition duration-300">
                <Play fill="#000" size={16} />
              </button>
              <strong className="font-semibold">Utopia</strong>
              <span className="text-sm text-zinc-500">Travis Scott</span>
            </a>
          </div>
        </main>
  )
}
