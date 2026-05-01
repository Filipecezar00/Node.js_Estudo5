import { useEffect } from "react";
import usePlateServices from "../../services/plate";
import Loading from "../loading/pages";
import PlateCard from "../../components/plateCard/plateCard";

export default function Plates() {
  const { getPlate, plateList, plateLoading, refetchPlate } =
    usePlateServices();
  useEffect(() => {
    if (refetchPlate) {
      getPlate();
    }
  }, [refetchPlate, getPlate]);

  if (plateLoading) {
    return <Loading />;
  }

  console.log(plateList);
  return (
    <>
      <div>
        {plateList.map((plate) => {
          return <PlateCard plateData={plate} key={plate._id} />;
        })}
      </div>
    </>
  );
}
