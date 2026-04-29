import { useState, useCallback } from "react";

export default function usePlateServices() {
  const [plateLoading, setPlateLoading] = useState(false);
  const [refetchPlate, setRefetchPlate] = useState(true);
  const [error, setError] = useState(null);
  const [plateList, setPlateList] = useState([]);

  const BASE_URL = "http://localhost:3000/orders";

  const getPlate = useCallback(async (userId) => {
    if (!userId) return;

    setPlateLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/availables`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Erro no servidor: ${response.status}`);
      }
      const result = await response.json();

      if (result.success) {
        setPlateList(result.body);
      } else {
        setError("Erro retornado pela API");
        setPlateList([]);
      }
    } catch (err) {
      console.error("Erro na camada de serviço:", err);
      setError(err.message);
      setPlateList([]);
    } finally {
      setPlateLoading(false);
      setRefetchPlate(false);
    }
  });

  return { getPlate, plateLoading, refetchPlate, plateList };
}
