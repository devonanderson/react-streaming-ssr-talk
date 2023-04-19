'use client';

import Image from 'next/image'

/**
 * A single Spotify entity card
 * @param entity - Spotify entity
 * @returns {JSX.Element}
 */
export default function EntityCard({ entity }: { entity: any }): JSX.Element {
  return (
    <li className="bg-[#333333] rounded-md overflow-hidden">
      <button onClick={() => alert("I've been clicked!")} className="flex w-[100%] items-center">
        <Image src={entity.album ? entity.album.images[0].url : entity.images[0].url} alt={entity.name} width={96} height={96} className="mr-4" />
        <div className="text-left pr-2">
          <p className="font-body text-xl font-semibold line-clamp-1">{entity.name}</p>
          {entity.artists && <p className="font-body text-sm opacity-75 line-clamp-1">{entity.artists[0].name}</p>}
        </div>
      </button>
    </li>
  )
}