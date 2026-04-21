import styles from "./page.module.css";
import Dessert from "../../../public/imgs/homepage/dessert";
import NaturalFood from "../../../public/imgs/homepage/naturalFood";
import Vegetable from "../../../public/imgs/homepage/vegetable";
import {
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <section>
        <h1>Welcome to My Gastronomy</h1>
        <p>
          Hello and welcome to our special culinary corner, where Italian
          tradition dances with modern creativity to give you a unique culinary
          experience. With us, every dish is a taste hug, conceived with love
          and dedication to make each of your days unforgettable.
        </p>
      </section>

      <section className={styles.foodSection}>
        <div>
          <i>
            <NaturalFood />
          </i>
          <h4>Excellence in EveryDay Life</h4>
          <p>
            Discover our daily selection of unique dishes to add a fresh and
            refined touch to your tables
          </p>
        </div>
        <div>
          <i>
            <Vegetable />
          </i>
          <h4>First Choice Ingredients</h4>
          <p>
            We carefully select exceptional Ingredients to ensure the highest
            quality in your table
          </p>
        </div>
        <div>
          <i>
            <Dessert />
          </i>
          <h4>Taste for Everyone</h4>
          <p>
            Explore a world of flavors with our comprehensive offering, designed
            to satisfy your dreams.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h1>Stay updated</h1>
        <p>
          Enter the world of My Gastronomy by following us on social media,
          you´ll always be updated on our culinary creations, special events,
          and gourmet surprises. Don´t miss out on a single bite.{" "}
        </p>
        <div className={styles.socialButtonsContainer}>
          <a className={styles.socialButton}>
            <FaInstagram />
            Instagram
          </a>
          <a className={styles.socialButton}>
            <FaFacebookSquare />
            Facebook
          </a>{" "}
          <a className={styles.socialButton}>
            <FaWhatsapp />
            Whatsapp
          </a>
          <a className={styles.socialButton}>
            <FaMapMarkerAlt />
            Location
          </a>
        </div>
      </section>
    </div>
  );
}
