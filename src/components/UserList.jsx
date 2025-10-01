import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchUsers, addUser } from "../Store";
import Lottie from "lottie-react";
import Loader from "../Loader.json";
import errorLoader from "../error.json"
import { useThunk } from "../Thunks/use-thunks";



function UserList() {

    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)
    
    const {data} = useSelector((state) => {
        return state.users
})

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser()
    }

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



























// function AddUserButton({ handleUserAdd }) {
//   const [isCreating, setIsCreating] = useState(false);

//   const handleClick = async () => {
//     setIsCreating(true);
//     try {
//       await handleUserAdd(); // wait for the user creation process
//     } finally {
//       setIsCreating(false);
//     }
//   };

//   return (
//     <button
//       disabled={isCreating}
//       onClick={handleClick}
//       className={`w-full sm:w-auto px-4 py-2 rounded-lg shadow transition 
//         ${isCreating 
//           ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
//           : "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"}`}
//     >
//       {isCreating ? "Creating User..." : "+ Add User"}
//     </button>
//   );
// }

// export default AddUserButton;
