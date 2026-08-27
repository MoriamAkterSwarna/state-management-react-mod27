import { Suspense } from "react";
import type { User } from "./type";
import UsersData from "./UsersData";

const userData: Promise<User[]> = fetch(
  "https://jsonplaceholder.typicode.com/users",
).then((res) => res.json());

const Users = () => {
  const userDataPromise: Promise<User[]> = userData;

  return (
    <>
      {/* <UsersData userDataPromise={userDataPromise} />  */}

      <Suspense fallback={<h2>Loading...</h2>}>
        <UsersData userDataPromise={userDataPromise} />
      </Suspense>
    </>
  );
};

export default Users;
