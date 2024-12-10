export default function GetStaticProps() {
  return (
    <div>
      <h1>Hello, API!</h1>
      <p>getStaticPropsのテスト</p>

      <div className="data-place">
        <h2>getStaticPropsはAppRouterでは使えない機能だよ</h2>
      </div>
    </div>
  );
}
