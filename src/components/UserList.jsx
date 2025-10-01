import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../Store";
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

    if(isLoading){
        return <div>
            <Lottie loop={true} animationData={Loader}/>
        </div>
    }

    if (error) {
        return <div className="w-fit h-screen">
            <Lottie className="h-full flex items-center justify-center" loop={true} animationData={errorLoader}/>
        </div>
    }

    return <div>
        {data.length}
    </div>
}

export default UserList
