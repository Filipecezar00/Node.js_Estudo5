import { useState, useCallback } from "react";

export default function useOrderServices() {
  const [orderLoading, setOrderLoading] = useState(false);
  const [refetchOrders, setRefetchOrders] = useState(true);
  const [error, setError] = useState("");
  const [ordersList, setOrdersList] = useState([]);

  const url = "http://localhost:3000/orders";

  const getUserOrders = useCallback(
    async (userId) => {
      if (!userId) return;

      setOrderLoading(true);
      setError(null);

      try {
        const response = await fetch(`${url}/userorders/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Erro no servidor: ${response.status}`);
        }
        const result = await response.json();

        if (result.success) {
          setOrdersList(result.body);
        }
      } catch (err) {
        console.error("Erro na camada de serviço:", err);
        setError(err.message);
        setOrdersList([]);
      } finally {
        setOrderLoading(false);
        setRefetchOrders(false);
      }
    },
    [url],
  );

  return { getUserOrders, orderLoading, ordersList, error, refetchOrders };
}
