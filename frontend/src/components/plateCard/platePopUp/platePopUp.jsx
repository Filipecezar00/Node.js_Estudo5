import { Dialog } from "@mui/material";
import styles from "./platePopUp.module.css";

export default function PlatePopup({ plateData, onClose }) {
  return (
    <Dialog open={true} onClose={onClose}>
      <div className={styles.popupContainer}>
        <img src={plateData.imgUrl} alt="" />
        <div className={styles.popupContent}>
          <h2>{plateData.name}</h2>
          <p>{plateData.description}</p>
          <p>$ {plateData.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </Dialog>
  );
}
