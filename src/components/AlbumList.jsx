import { useAddAlbumMutation, useFetchAlbumQuery } from '../Store'
import AlbumListItemlist from './AlbumListItemlist';
import ExpandablePannel from "./ExpandablePannel";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumQuery(user);
  useFetchAlbumQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user)
  }
  
  let content;
  if (isLoading) {
     <div>Loading...</div>
  }else{
    content = data.map(album => {
      return <AlbumListItemlist key={album.id} album={album}/>
    })
  }
  return (
<>
  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 mb-4">
    <h2 className="text-lg font-semibold text-gray-800">
      Albums for {user.name}
    </h2>
    <button
      onClick={handleAddAlbum}
      className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
    >
      + Add Album
    </button>
  </div>

  <div className="space-y-3">{content}</div>
</>

  )
}

export default AlbumList
