import React from 'react'

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between pt-4">
        <h2 className="font-semibold text-xl">{title}</h2>
        <a href='#' className="text-xs text-zinc-400 font-semibold hover:underline">Mostrar tudo</a>
    </div>
  )
}
