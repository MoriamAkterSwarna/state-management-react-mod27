import { Suspense } from "react";
import type { User } from "./type";
import UsersData_with_async from "./UsersData_with_async";

const fetchUsersAsync = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const Users_With_Async = () => {

    const usersPromiseAsync :Promise<User[]> = fetchUsersAsync()

    return (
        <div>
            <h2>Friends</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
            <UsersData_with_async usersPromiseAsync={usersPromiseAsync} />
            </Suspense>
        </div>
    );
};

export default Users_With_Async;