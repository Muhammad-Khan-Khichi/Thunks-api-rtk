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
      className="p-4 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition"
    >
      <p className="text-lg font-semibold text-gray-800">{user.name}</p>
    </div>
  )
})

return (
    <>
    <div className="flex justify-between p-2">
        <div>User</div>
        <div>
        <button className="cursor-pointer" onClick={handleUserAdd}>+ Add User</button>
        </div>
    </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 cursor-pointer">
         {renderedUsers}
     </div>
    </>
)

}

export default UserList
