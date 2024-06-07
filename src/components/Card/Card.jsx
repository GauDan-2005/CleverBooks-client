import PropTypes from "prop-types";
import styles from "./Card.module.css";

import images from "../../constants/Image";

const Card = ({ mainImg, title, text, link, titleStyle = "basic" }) => {
  return (
    <div className={styles.card}>
      {mainImg && (
        <div className={styles.main_img_div}>
          <img className={styles.main_img} src={mainImg} />
        </div>
      )}
      <div className={styles.text_div}>
        {title && (
          <p className={`${styles.title} ${styles[titleStyle]}`}>{title}</p>
        )}
        <div className={styles.subtext_div}>
          {text && <p className={styles.text}>{text}</p>}
          {link && (
            <a className={styles.link} href={link}>
              <img className={styles.link_img} src={images.arrowLink} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  mainImg: PropTypes.any,
  titleStyle: PropTypes.string,
};

export default Card;
