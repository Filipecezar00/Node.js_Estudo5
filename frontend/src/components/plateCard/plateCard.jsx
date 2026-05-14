import styles from "./plateCard.module.css";

export default function PlateCard({ plateData }) {
  console.log(plateData);
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={plateData.imgUrl} alt="" />
        <div className={styles.cardContent}>
          <h4 className={styles.name}>{plateData.name}</h4>
          <h4 className={styles.price}>R$ {plateData.price}</h4>
        </div>
      </div>
    </>
  );
}
