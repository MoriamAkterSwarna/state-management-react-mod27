import { use } from "react";
import type { User } from "./type";

const UsersData = ({ userDataPromise }: { userDataPromise: Promise<User[]> }) => {

    const users = use(userDataPromise)
    console.log(users)
    return (
        <div>
            <h2>Users Data :  {users.length} </h2>
            {
                users.map(user => <p key={user.id}>{user.name}</p>)
            }
        </div>
    );
};

export default UsersData;