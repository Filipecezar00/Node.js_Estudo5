import { Dialog } from "@mui/material";
import styles from "./ConfirmOrderPopUp.module.css";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function ConfirmOrderPopUp({ open, onClose, onConfirm }) {
  const [formData, setFormData] = useState(null);

  const handleConfirm = () => {
    onConfirm(orderData);
  };
  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Dialog open={true} onClose={onClose}>
      <div className={styles.popupContainer}>
        <h2>We're almost there...</h2>
        <p>
          Confirm your order with the current date:{" "}
          <strong>{new Date().toLocaleDateString()}</strong> What time will you
          come to pick up your order ?{" "}
        </p>
        <form className={styles.formContainer}>
          <TextField
            onChange={handleFormDataChange}
            required
            type="time"
            name="pickupTime"
          />
          <div className={styles.confirmBtns}>
            <button className={styles.cancelBtn} onClick={() => onClose()}>
              Cancel
            </button>
            <button onClick={handleConfirm}>Confirm</button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}
