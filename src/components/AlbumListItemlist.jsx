import React from 'react'
import ExpandablePannel from './ExpandablePannel';
import { CiTrash } from "react-icons/ci";
import { useRemoveAlbumMutation } from '../Store';

function AlbumListItemlist({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }
const header = (
<div className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-t-xl shadow-sm">
  <span className="text-base font-semibold text-gray-800 truncate">
    {album.title}
  </span>
  <button
    onClick={(e) => {
        e.stopPropagation()
        handleRemoveAlbum()
    }}
    className="cursor-pointer p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
  >
    <CiTrash className="w-5 h-5" />
  </button>
</div>
);

  return (
<ExpandablePannel key={album.id} header={header}>
  <div className="px-4 py-3 text-sm text-gray-700 bg-gray-50 border-t border-gray-100 rounded-b-xl">
    List of photos in the album
  </div>
</ExpandablePannel>
  );
}

export default AlbumListItemlist
