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
    <p className="flex items-center justify-between text-base sm:text-lg md:text-xl font-semibold text-gray-800">
      <button
        onClick={handleClick}
        className="p-1 rounded-full hover:bg-gray-100 text-gray-600 hover:text-red-500 transition-colors duration-200"
      >
        <RxCross2 className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <span className="truncate text-center flex-1 mx-2">
        {user.name}
      </span>
    </p>

    {error && (
      <div className="mt-2 text-sm text-red-600 font-medium text-center">
        Error deleting user.
      </div>
    )}
  </div>
    </>
  return (
<ExpandablePannel header={header}>
  <div className="max-h-80 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
    <AlbumList user={user} />
  </div>
</ExpandablePannel>


  );
}

export default UserListItem
