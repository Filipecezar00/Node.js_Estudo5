import styles from "./navbar.module.css";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarItems}>
        <img className={styles.logo} src="/logo.png" alt="" />
        <div className={styles.navbarLinksContainer}>
          <a href="" className={styles.navbarLink}>
            Home
          </a>
          <a href="" className={styles.navbarLink}>
            Plates
          </a>
          <LuShoppingCart className={styles.navbarLink} />
          <FaRegUserCircle className={styles.navbarLink} />
        </div>
      </div>
    </nav>
  );
}
