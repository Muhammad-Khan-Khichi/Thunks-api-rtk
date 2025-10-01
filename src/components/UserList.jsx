import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../Store";
import Lottie from "lottie-react";
import Loader from "../Loader.json";
import errorLoader from "../error.json"

function UserList() {

    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => {
        return state.users
})

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    const handleUserAdd = () => [
        dispatch(addUser())
    ]

    if(isLoading){
        return <div className="w-fit h-screen">
            <Lottie className="h-full flex items-center justify-center"  loop={true} animationData={Loader}/>
        </div>
    }

    if (error) {
        return <div className="w-fit h-screen">
            <Lottie className="h-full flex items-center justify-center" loop={true} animationData={errorLoader}/>
        </div>
    }

const renderedUsers = data.map((user) => {
  return (
<div
  key={user.id}
  className="p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
>
  <p className="text-lg font-semibold text-gray-800 tracking-wide">{user.name}</p>
</div>

  )
})

return (
<>
  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow">
    <div className="text-xl font-bold text-gray-700">Users</div>
    <div>
      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer"
        onClick={handleUserAdd}
      >
        + Add User
      </button>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {renderedUsers}
  </div>
</>

)

}

export default UserList
