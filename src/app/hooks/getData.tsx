import { User } from "../types/type";

export async function GetUsers() {
  const res = await fetch(
    `https://my-json-server.typicode.com/lamina1331/My-JSON-Server/users/`
  );
  if (!res.ok) {
    console.error("Failed to fetch users");
    return [];
  }
  const users: User[] = await res.json();
  console.log(users);
  return users;
}
