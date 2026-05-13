import { useEffect, useState } from "react";
import usePlateServices from "../../services/plate";
import Loading from "../loading/pages";
import PlateCard from "../../components/plateCard/plateCard";
import styles from "./page.module.css";
import PlatePopup from "../../components/plateCard/platePopUp/platePopUp";

export default function Plates() {
  const { getPlate, plateList, plateLoading, refetchPlate } =
    usePlateServices();

  const [plateSelected, setPlateSelected] = useState(null);

  useEffect(() => {
    if (refetchPlate) {
      getPlate();
    }
  }, [refetchPlate, getPlate]);

  const handlePlatesSelected = (plate) => {
    setPlateSelected(plate);
  };

  const handleClosePopup = () => {
    setPlateSelected(null);
  };

  if (plateLoading) {
    return <Loading />;
  }

  console.log(plateList);
  return (
    <>
      <div>
        {plateList.map((plate) => (
          <div
            key={plate._id}
            className={styles.cardContainer}
            onClick={() => {
              handlePlatesSelected(plate);
            }}
          >
            <PlateCard plateData={plate} key={plate._id} />;
          </div>
        ))}
      </div>
      {plateSelected && (
        <>
          <PlatePopup plateData={plateSelected} />
        </>
      )}
    </>
  );
}
