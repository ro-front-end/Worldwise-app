import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
