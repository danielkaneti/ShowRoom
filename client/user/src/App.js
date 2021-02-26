export default function App() {
  const props = { className: "foo", f: 4 };
  return (
  <div className="main">
  <h1 {...props}>Hello world</h1>
  </div>
  );
 }