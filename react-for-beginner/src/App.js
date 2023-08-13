import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log("run all the time");
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`Search for ${keyword}`);
    }
  }, [keyword]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={keyword}
        onChange={onChange}
      />
      <h1 className={styles.title}>Welcome back</h1>
      <Button onClick={onClick} text="sdfa"></Button>
      <span>{value}</span>
    </div>
  );
}

export default App;
