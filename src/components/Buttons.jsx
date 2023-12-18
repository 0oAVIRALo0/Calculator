import { useState } from "react";
import styles from "./buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  const [clickedButton, setClickedButton] = useState("");

  const buttonNames = [
    "Clear",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
    onButtonClick(buttonName);

    setTimeout(() => {
      setClickedButton(null);
    }, 150);
  };

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={`${styles.button} ${
            clickedButton === buttonName ? styles.clicked : ""
          }`}
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
