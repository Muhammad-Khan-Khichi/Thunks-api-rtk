import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../Store";
import Lottie from "lottie-react";
import Loader from "../Loader.json";
import errorLoader from "../error.json"

function UserList() {

    const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    const [loadingUsersError, setLoadingUsersError] = useState(null)
     
    const dispatch = useDispatch();
    const {data} = useSelector((state) => {
        return state.users
})

    useEffect(() => {
        setIsLoadingUsers(true)
        dispatch(fetchUsers())
        .unwrap()
        .catch((err) => {
            setLoadingUsersError(err)
            setIsLoadingUsers(false)
        })
        .finally(() => {
            setIsLoadingUsers(false)
        })
    }, [dispatch]);

    const handleUserAdd = () => [
        dispatch(addUser())
    ]

    if(isLoadingUsers){
        return <div className="w-fit h-screen">
            <Lottie className="h-full flex items-center justify-center"  loop={true} animationData={Loader}/>
        </div>
    }

    if (loadingUsersError) {
        return <div className="w-fit h-screen">
            <Lottie className="h-full flex items-center justify-center" loop={true} animationData={errorLoader}/>
        </div>
    }

const renderedUsers = data.map((user) => {
  return (
<div
  key={user.id}
  className="w-full max-w-xs sm:w-64 md:w-72 lg:w-80 
             mx-auto p-4 sm:p-6 bg-white shadow-md rounded-2xl 
             border border-gray-200 hover:shadow-xl 
             hover:-translate-y-1 transition-transform duration-300"
>
  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
    {user.name}
  </p>
</div>


  )
})

return (
<>
<div className="flex sm:flex-row justify-around items-center sm:items-center p-4 bg-gray-100 rounded-lg shadow gap-3">
  <div className="text-lg sm:text-xl font-bold text-gray-700">Users</div>
  <div>
    <button
      className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer"
      onClick={handleUserAdd}
    >
      + Add User
    </button>
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
  {renderedUsers}
</div>

</>

)

}

export default UserList
