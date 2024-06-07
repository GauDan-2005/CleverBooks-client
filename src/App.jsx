import { useState } from "react";

// CSS
import styles from "./App.module.css";

// CONSTANTS
import keys from "./constants/Keyquestion";
import companyList from "./constants/CompanyList";
import imagesCompany from "./constants/companyImages";
import customerList from "./constants/CustomerList";
import featuresList from "./constants/FeaturesList";
import advantages from "./constants/AdvantagesList";
import blogs from "./constants/BlogList";
import images from "./constants/Image";

// COMPONENTS
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import CustomerCard from "./components/CustomerCard/CustomerCard";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [featureSelected, setFeatureSelected] = useState(0);
  const [customerIndex, setCustomerIndex] = useState(0);

  const findIndex = (feature) => {
    const i = featuresList.findIndex(feature);
    setFeatureSelected(i);
  };

  const nextFunc = (action, place) => {
    action((prev) => {
      return (prev + 1) % place.length;
    });
  };

  const prevFunc = (action, place) => {
    action((prev) => {
      return Math.abs(prev - 1) % place.length;
    });
  };

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <section id={styles.key_questions}>
        <div className={styles.kq}>
          <p className={styles.section_heading}>
            Four key questions answered by Crest
          </p>
          <div className={styles.kq_card_div}>
            {keys.map((key) => (
              <Card
                key={key.id}
                mainImg={key.mainImg}
                title={key.title}
                text={key.text}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <section id={styles.feature_scroll}>
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </section> */}
      <section id={styles.companyList}>
        <div className={styles.company_wrapper}>
          <div className={styles.company}>
            {imagesCompany.map((company) => (
              <img
                key={company}
                src={company}
                alt=""
                className={styles.company_img}
              />
            ))}
          </div>
          <div className={styles.company}>
            {imagesCompany.map((company) => (
              <img
                key={company}
                src={company}
                alt=""
                className={styles.company_img}
              />
            ))}
          </div>
        </div>
      </section>
      <section id={styles.customer}>
        <div className={styles.customer_div}>
          <CustomerCard
            key={customerList[customerIndex].name}
            text={customerList[customerIndex].text}
            name={customerList[customerIndex].name}
            designation={customerList[customerIndex].designation}
            companyName={customerList[customerIndex].companyName}
            companyImg={customerList[customerIndex].companyImg}
            mainImg={customerList[customerIndex].mainImg}
            customerImg={customerList[customerIndex].customerImg}
            titleCard1={customerList[customerIndex].title1}
            titleCard2={customerList[customerIndex].title2}
            textCard1={customerList[customerIndex].text1}
            textCard2={customerList[customerIndex].text2}
            link={customerList[customerIndex].link}
            nextFunction={nextFunc}
            prevFunction={prevFunc}
            action={setCustomerIndex}
            place={customerList}
          />
        </div>
      </section>
      <section id={styles.spreadsheet_section}>
        <div className={styles.spreadsheet}>
          <p className={styles.section_heading}>
            Things your spreadsheet wishes it could do
          </p>
          <div className={styles.sp_body}>
            <div className={styles.feature_list_div}>
              {featuresList.map((feature) => (
                <div onClick={() => findIndex(feature)} key={feature.title}>
                  <p className={styles.feature_title}>{feature.title}</p>
                  <p className={styles.feature_text}>{feature.text}</p>
                  <a href={feature.link} className={styles.feature_link}>
                    <p className={styles.feature_link_text}>Learn More</p>
                    <img src={images.arrowLink2} />
                  </a>
                </div>
              ))}
            </div>
            <div className={styles.feature_img_div}>
              {featuresList[featureSelected] && (
                <img
                  className={styles.feature_main_img}
                  src={featuresList[featureSelected].mainImg}
                />
              )}
            </div>
          </div>
          <Button title="View all features" func={null} />
        </div>
      </section>
      <section id={styles.advantages}>
        <div className={styles.adv_div}>
          <p className={styles.section_heading}>Get Clever Books and get...</p>
          <div>
            <img
              className={styles.leftCircle}
              onClick={null}
              src={images.arrowLeftCircle}
              alt="Previous"
            />
            <div>
              {advantages.map((adv) => (
                <div key={adv.title} className={styles.adv_card}>
                  <img src={adv.img} />
                  <div className={styles.adv_body}>
                    <p className={styles.title}>{adv.title}</p>
                    <p className={styles.text}>{adv.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <img
              className={styles.rightCircle}
              onClick={null}
              src={images.arrowLeftCircle}
              alt="Next"
            />
          </div>
        </div>
      </section>
      <section id={styles.founder}>
        <div className={styles.founder_div}>
          <img className={styles.founder_image} src="" alt="Founders" />
          <div className={styles.founder_text_div}>
            <p className={styles.section_heading}>From the founders</p>
            <p className={styles.founder_text}>
              We are a young company solving an age-old problem: Supply Chain.
              Our goal is simple: to eradicate stock outs for businesses that
              want to grow faster. Our background, tech expertise, and empathy
              allow us to do just that.
              <br />
              <br />
              Thank you for checking out Crest, and we hope to help you always
              be in stock!
            </p>
            <Button title="Learn more" func={null} bg="white" />
          </div>
          <div className={styles.founder_name_div}>
            <p className={styles.founder_name_text}>
              <span className={styles.founder_name_span}>
                Rahul Vishwakarma, Akhil Kumar & Yogesh Byahatti -
              </span>{" "}
              Founders
            </p>
          </div>
        </div>
      </section>
      <section id={styles.blog}>
        <div className={styles.blog_div}>
          <div className={styles.blog_desc_div}>
            <div className={styles.blog_desc_text_div}>
              <p className={styles.section_heading}>
                Delivered: The Clever Books blog
              </p>
              <p className={styles.blog_text}>
                Insights from years of working in various supply-chain roles
                (and an itch to write). We hope you find these posts
                interesting!
              </p>
              <div className={styles.blog_slide_navigation_arrow}>
                <img
                  className={styles.leftCircle}
                  onClick={null}
                  src={images.arrowLeftCircle}
                  alt="Previous"
                />
                <img
                  className={styles.leftCircle}
                  onClick={null}
                  src={images.arrowLeftCircle}
                  alt="Previous"
                />
              </div>
            </div>
            <Button title="View all blogs" func={null} bg="white" />
          </div>
          <div className={styles.blog_list_div}>
            {blogs.map((blog) => (
              <a className={styles.blog_card} href={blog.link} key={blog.date}>
                <div className={styles.blog_card_body}>
                  <div className={styles.blog_img_div}>
                    <img className={styles.blog_img} src={blog.img} alt="" />
                  </div>
                  <p className={styles.blog_title}>{blog.title}</p>
                </div>
                <div className={styles.blog_date_div}>
                  <p className={styles.blog_date}>{blog.date}</p>
                  <img
                    className={styles.blog_link}
                    src={images.arrowLink}
                    alt=""
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
