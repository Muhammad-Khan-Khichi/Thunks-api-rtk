import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUsers } from "../Store";

function UserList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

  return (
    <div>
        user list
    </div>
  )
}

export default UserList
