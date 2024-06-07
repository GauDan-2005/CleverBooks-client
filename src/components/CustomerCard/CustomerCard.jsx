import PropTypes from "prop-types";

import styles from "./CustomerCard.module.css";
import images from "../../constants/Image";

const CustomerCard = ({
  text,
  name,
  designation,
  companyName,
  companyImg,
  mainImg,
  customerImg,
  titleCard1,
  titleCard2,
  textCard1,
  textCard2,
  link,
  nextFunction,
  prevFunction,
  action,
  place,
}) => {
  return (
    <div className={styles.customer_card}>
      <div className={styles.left_div}>
        <div className={styles.info}>
          <p className={styles.info_text}>{text}</p>
          <div className={styles.customer_detail_div}>
            <img className={styles.customer_img} src={customerImg} alt={name} />
            <div className={styles.customer_name_div}>
              <p className={styles.found_name}>{name}</p>
              <p className={styles.customer_position}>
                {designation}, {companyName}
              </p>
            </div>
            <img
              className={styles.company_img}
              src={companyImg}
              alt={companyName}
            />
          </div>
          <div className={styles.customer_navigate}>
            <img
              onClick={() => prevFunction(action, place)}
              className={`${styles.shift_img} ${styles.left}`}
              src={images.arrowLeft}
              alt="previous"
            />
            <img
              onClick={() => nextFunction(action, place)}
              className={`${styles.shift_img} ${styles.right}`}
              src={images.arrowLeft}
              alt="next"
            />
          </div>
        </div>
        <div className={styles.card_div}>
          <div className={styles.card}>
            <p className={styles.card_heading}>{titleCard1}</p>
            {textCard1 && <p className={styles.card_text}>{textCard1}</p>}
          </div>
          <div className={styles.card}>
            <p className={styles.card_heading}>{titleCard2}</p>
            {textCard2 && <p className={styles.card_text}>{textCard2}</p>}
          </div>
          {link && (
            <a href={link} className={styles.link_card}>
              <p className={styles.link_text}>Read Story</p>
              <img
                className={styles.link_arrow}
                src={images.arrowLeftNoCircle}
                alt=""
              />
            </a>
          )}
        </div>
      </div>
      <div className={styles.main_img_wrapper}>
        <img className={styles.main_img} src={mainImg} alt="" />
      </div>
    </div>
  );
};

CustomerCard.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  companyName: PropTypes.string,
  companyImg: PropTypes.node,
  mainImg: PropTypes.node,
  customerImg: PropTypes.node,
  titleCard1: PropTypes.string,
  titleCard2: PropTypes.string,
  textCard1: PropTypes.string,
  textCard2: PropTypes.string,
  link: PropTypes.string,
  nextFunction: PropTypes.func,
  prevFunction: PropTypes.func,
  action: PropTypes.func,
};

export default CustomerCard;
