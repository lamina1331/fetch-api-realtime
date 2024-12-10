"use client"; // クライアントコンポーネント
import { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "../../types/type";

export default function Client({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `https://my-json-server.typicode.com/lamina1331/My-JSON-Server/users`
        );
        if (res.ok) {
          const newUsers: User[] = await res.json();
          setUsers(newUsers);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!users || users.length === 0) {
    return <div>ユーザー情報がありません。</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.userName}>
          <Image
            src={user.userIcon}
            alt={user.userName}
            width={300}
            height={300}
            priority={true}
          />
          <h3>{user.userName}</h3>
          <p>{user.userDesc}</p>
        </div>
      ))}
    </div>
  );
}
