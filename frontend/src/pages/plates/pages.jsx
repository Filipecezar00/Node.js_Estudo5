import { useEffect } from "react";
import usePlateServices from "../../services/plate";

export default function Plates() {
  const { getPlate, plateList, plateLoading, refetchPlate } =
    usePlateServices();
  useEffect(() => {
    if (refetchPlate) {
      getPlate();
    }
  }, [refetchPlate]);

  if (plateLoading) {
    return <Loading />;
  }

  console.log(plateList);
  return <h1>Plates</h1>;
}
