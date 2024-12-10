import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello, API!</h1>
      <p>API通信をテストしてみるよ.</p>

      <ul>
        <li>
          <Link href="/getStaticProps">getStaticPropsは非推奨</Link>
        </li>
        <li>
          <Link href="/serverComponents">Server Componentが推奨</Link>
        </li>
        <li>
          <Link href="/serverReal">
            Server Componentで初期値取得 × Client
            Componentで更新がリアルタイムで表示のベストプラクティス
          </Link>
        </li>
      </ul>
    </div>
  );
}
