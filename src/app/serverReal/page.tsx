import { User } from "../types/type";
import { GetUsers } from "../hooks/getData";
import Client from "./_client/page";

export default async function ServerReal() {
  const users: User[] = await GetUsers(); // 初期データをサーバーサイドで取得

  return (
    <div>
      <h1>Hello, API!</h1>
      <p>Server ComponentsでのAPIリアルタイム通信をテストしてみるよ.</p>

      <div className="data-place">
        <h2>Server ComponentsがAppRouterでは推奨です</h2>
        <p>ページを更新する必要がなくなります</p>

        {/* 初期データをクライアントコンポーネントに渡す */}
        <Client initialUsers={users} />
      </div>
    </div>
  );
}
