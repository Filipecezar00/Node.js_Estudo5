import { Dialog, IconButton } from "@mui/material";
import { MdClose } from "react-icons/md";
import styles from "./platePopUp.module.css";

export default function PlatePopup({ plateData, onClose, onAddToCart }) {
  return (
    <Dialog open={true} onClose={onClose}>
      <IconButton onClick={onClose} className={styles.closeButton}>
        <MdClose />
      </IconButton>
      <div className={styles.popupContainer}>
        <img src={plateData.imgUrl} alt="" />
        <div className={styles.popupContent}>
          <h2>{plateData.name}</h2>
          <p>{plateData.description}</p>
          <p>$ {plateData.price}</p>
          <button onClick={() => onAddToCart(plateData)}>Add to Cart</button>
        </div>
      </div>
    </Dialog>
  );
}
