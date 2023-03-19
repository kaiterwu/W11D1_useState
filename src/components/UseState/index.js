import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  let [theme, SetTheme] = useState("light");
  const [count, SetCount] = useState(0);
  return (
    <div className={theme} state>
      <h1>UseState Component</h1>
      <button onClick={() => SetTheme("dark")}>Switch</button>
      <button onClick={() => SetTheme("light")}>Light</button>
      <h1>{count}</h1>
      <h2>DISPLAY COUNT HERE</h2>
      <button onClick={() => SetCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => SetCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
