import React from 'react'
import { useThunk } from '../Thunks/use-thunks'
import { removeUser } from '../Store'
import { RxCross2 } from "react-icons/rx";
import ExpandablePannel from './ExpandablePannel';
import AlbumList from './AlbumList';

function UserListItem({user}) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user)
    }

    const header =
    <>
     <div
  className="w-full max-w-xs sm:w-64 md:w-72 lg:w-80 
             mx-auto p-4 sm:p-6 bg-white shadow-md rounded-2xl 
             border border-gray-200 hover:shadow-xl 
             hover:-translate-y-1 transition-transform duration-300"
>
  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
    <button onClick={handleClick}>
        <RxCross2 />
    </button>
    {error && <div>Error deleting user.</div>}
    {user.name}
  </p>
</div>
    </>
  return (
    <ExpandablePannel header={header}>
        <AlbumList user={user}/>
    </ExpandablePannel>
  );
}

export default UserListItem
