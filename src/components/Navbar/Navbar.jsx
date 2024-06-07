import styles from "./Navbar.module.css";
import logo from "../../assets/cleverbooks-logo.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a className={styles.home_link} href="/">
        <img className={styles.logo_img} src={logo} alt="Logo" />
      </a>
      <div className={styles.link_div}>
        <a className={styles.link_text} href="#">
          Product
        </a>
        <a className={styles.link_text} href="#">
          Pricing
        </a>
        <a className={styles.link_text} href="#">
          Industry
        </a>
        <a className={styles.link_text} href="#">
          Customer Stories
        </a>
        <a className={styles.link_text} href="#">
          About
        </a>
        <a className={styles.link_text} href="#">
          Blog
        </a>
      </div>
      <div className={styles.btn_div}>
        <a className={styles.btn_login}>Login</a>
        <a className={styles.btn_ttu}>Talk to Us</a>
      </div>
    </div>
  );
};

export default Navbar;
