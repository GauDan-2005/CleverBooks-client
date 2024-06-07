import Button from "../Button/Button";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.svg";
import heroHighlight from "../../assets/hero-btn-highlight.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text_div}>
        <p className={styles.heading}>
          Every order
          <br />
          fulfilled, <span className={styles.heading_highlight}>on time.</span>
        </p>
        <p className={styles.hero_para}>
          Eliminate overstocking and under-stocking with Crest. Built by
          supply-chain experts, it brings the same technology used by large
          global brands to power fast-growing startups. In short, we make supply
          meet demand, and then help you grow both.
        </p>
        <div className={styles.hero_btn_wrapper}>
          <Button title="Get started with CleverBooks" func={null} />
        </div>
        <img
          className={styles.button_highlight_img}
          src={heroHighlight}
          alt="logo highlight img"
        />
      </div>
      <img className={styles.hero_img} src={heroImg} />
    </div>
  );
};

export default Hero;
