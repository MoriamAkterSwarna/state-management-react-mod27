import { use } from "react";
import type { User } from "./type";

const UsersData_with_async = ({
  usersPromiseAsync,
}: {
  usersPromiseAsync: Promise<User[]>;
}) => {
  const users = use(usersPromiseAsync);
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
          <h2>{user.name}</h2>
          <h3> {user.username}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersData_with_async;
