import InputBox from "./components/InputBox";
import Buttons from "./components/Buttons";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "Clear") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div>
      <div className={styles.calculator}>
        <InputBox displayVal={calVal}></InputBox>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </div>
  );
}

export default App;
