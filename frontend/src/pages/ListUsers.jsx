import api from "../../services/api";
import { useEffect, useState } from "react";

export default function ListUsers() {
  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    async function loadUsers() {
      const token = localStorage.getItem("token");
      const {
        data: { users },
      } = await api.get("/list-users", {
        headers: { Authorization: `Bearer ${token}` },
        // headers.authorization
      });

      setAllUsers(users);
    }

    loadUsers();
  }, []);

  return (
    <div className="">
      <h1 className="text-[32px] font-[600] text-center">List Users:</h1>
      <ul className="text-center gap-y-[1rem] mt-[1rem]">
        {/* if length do allUsers for maior que 0 */}
        {allUsers &&
          allUsers.map((user) => (
            <li key={user.id}>
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
