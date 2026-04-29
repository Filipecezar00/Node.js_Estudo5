import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <img src="/imgs/logo.png" alt="" />
      <div className={styles.footer}>
        <h4>Important Links</h4>
        <div className={styles.linksContainer}>
          <Link className={styles.link} to={"./"}>
            HomePage
          </Link>
          <Link className={styles.link} to={"/plates"}>
            Plates
          </Link>
          <Link className={styles.link} to={"/profile"}>
            Profile
          </Link>
        </div>
      </div>
    </footer>
  );
}
