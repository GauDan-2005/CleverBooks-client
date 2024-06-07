import images from "../../constants/Image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_card}>
        <p className={styles.footer_card_heading}>
          You can grow faster than you think!
        </p>
        <p className={styles.footer_card_text}>
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We
          bring the methods and technologies of large global companies to help
          brands of all sizes scale.
        </p>
        <div className={styles.footer_btn_wrapper}>
          <a className={styles.footer_btn}>Get started with Clever Books</a>
        </div>
      </div>
      <div className={styles.footer__link_div}>
        <div className={styles.footer_first}>
          <div className={styles.footer_logo_col}>
            <img className={styles.footer_logo} src={images.cleverbooksLogo} />
            <p className={`${styles.footer_text} ${styles.footer_logo_text}`}>
              Clever Books is an AI-powered supply chain software that provides
              companies tools for demand forecasting, inventory planning and
              more. This helps them have the right amount of stock, optimise
              space and fulfil every order.
            </p>
          </div>
          <div className={styles.footer_col}>
            <p className={styles.footer_title}>Explore</p>
            <p className={styles.footer_text}>Product</p>
            <p className={styles.footer_text}>Pricing</p>
            <p className={styles.footer_text}>Customer Stories</p>
            <p className={styles.footer_text}>Career</p>
          </div>
          <div className={styles.footer_col}>
            <p className={styles.footer_title}>Learn</p>
            <p className={styles.footer_text}>About</p>
            <p className={styles.footer_text}>Blog</p>
          </div>
          <div className={styles.footer_col}>
            <p className={styles.footer_title}>Contact Crest</p>
            <p className={styles.footer_text}>sales@getcrest.ai</p>
            <p className={styles.footer_text}>
              Registered Office:
              <br />
              1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India.
              560102
            </p>
            <p className={styles.footer_text}>
              Corporate Office:
              <br />
              291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR
              Layout, Bengaluru, India. 560102
            </p>
            <div className={styles.footer_social_div}>
              <img className={styles.footer_social_icon} src={images.twitter} />
              <img
                className={styles.footer_social_icon}
                src={images.facebook}
              />
              <img
                className={styles.footer_social_icon}
                src={images.instagram}
              />
              <img
                className={styles.footer_social_icon}
                src={images.linkedin}
              />
            </div>
          </div>
        </div>
        <div className={styles.footer_second}>
          <div className={styles.footer_license_div}>
            <div className={styles.footer_license_link}>
              <p className={styles.footer_text}>Copyright 2024 Crest</p>
              <p className={styles.footer_text}>Terms of Service</p>
              <p className={styles.footer_text}>Privacy Policy</p>
            </div>
            <p className={styles.footer_text}>
              Conifer Innovations Private Limited
              <br />
              CIN: U72900KA2022PTC163144
            </p>
          </div>
          <img
            className={styles.arrow_top}
            src={images.backToTopArrow}
            alt="Back to top"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
