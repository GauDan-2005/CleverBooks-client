import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ title, func, bg }) => {
  return (
    <a className={`${styles.btn} ${bg && styles[bg]}`} onClick={func}>
      <span className={styles.btn_title}>{title}</span>
    </a>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  func: PropTypes.func,
  bg: PropTypes.string,
};

export default Button;
