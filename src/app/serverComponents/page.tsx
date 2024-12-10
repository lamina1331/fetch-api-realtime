import Image from "next/image";
import { User } from "../types/type";
import { GetUsers } from "../hooks/getData";

export default async function ServerComponents() {
  const users: User[] = await GetUsers();
  if (!users) {
    return <div>ユーザー情報がありません。</div>;
  }

  return (
    <div>
      <h1>Hello, API!</h1>
      <p>Server ComponentsでのAPI通信をテストしてみるよ.</p>

      <div className="data-place">
        <h2>Server ComponentsがAppRouterでは推奨です</h2>
        <p>但し、ページを更新する必要があります</p>
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
    </div>
  );
}
