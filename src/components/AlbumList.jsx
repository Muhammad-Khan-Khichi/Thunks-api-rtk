import Loader from "../Loader.json";
import { useFetchAlbumQuery } from '../Store'
import ExpandablePannel from "./ExpandablePannel";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumQuery(user)
  
  let content;
  if (isLoading) {
     <div>Loading...</div>
  }else{
    content = data.map(album => {
      const header = <div>{album.title}</div>
      return <ExpandablePannel key={album.id} header={header}>
        List of photos in the album
      </ExpandablePannel>
    })
  }
  return (
    <>
      <div>
         Album for {user.name}
      </div>
      <div>{content}</div>
    </>
  )
}

export default AlbumList
