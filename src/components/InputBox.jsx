import styles from "./inputContainer.module.css";

const InputBox = ({ displayVal }) => {
  return (
    <input
      type="text"
      className={styles.inputContainer}
      value={displayVal}
      readOnly
    />
  );
};

export default InputBox;
