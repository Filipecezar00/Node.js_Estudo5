import { useEffect } from "react";
import usePlateServices from "../../services/plate";
import Loading from "../loading/pages";

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
  return <h1>Plates</h1>;
}
