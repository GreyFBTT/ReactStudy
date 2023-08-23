import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hello");
  }, []);
  console.log("hello");
  return <div>Hello</div>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
