import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  return (
    <div>
      <h1 className={styles.title}>Welcome back</h1>
      <Button onClick={onClick} text="sdfa"></Button>
      <span>{value}</span>
    </div>
  );
}

export default App;
