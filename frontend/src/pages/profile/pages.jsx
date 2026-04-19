import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import orderServices from "../../services/order";
import styles from "./page.module.css";

export default function Profile() {
  const { logout } = authServices();
  const { getUserOrders, orderLoading, refetchOrders, ordersList } =
    orderServices();
  const navigate = useNavigate();
  const [authData] = useState(() => JSON.parse(localStorage.getItem("auth")));

  useEffect(() => {
    if (!authData || !authData.user) {
      navigate("/auth");
      return;
    }
    if (refetchOrders) {
      getUserOrders(authData?.user?._id);
    }
  }, [authData?.user?._id, refetchOrders, navigate, getUserOrders]);

  console.log("Lista de pedidos que recebi:", ordersList);
  console.log("ID que estou usando para buscar:", authData?.user?._id);
  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  if (orderLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.pageContainer}>
      <div>
        <h1>{authData?.user?.fullname}</h1>
        <h3>{authData?.user?.email}</h3>
      </div>

      <button onClick={handleLogout}>Logout</button>

      {ordersList.length > 0 ? (
        <div className={styles.ordersContainer}>
          {ordersList.map((order) => (
            <div key={order._id} className={styles.orderContainer}>
              <p>{order.pickupStatus}</p>
              <h1>{order.pickupTime}</h1>

              {order.orderItems.map((item, index) => (
                <div key={item._id || index}>
                  {
                    <h4>
                      {item.itemDetails?.[0]?.name ||
                        "THERE IS NOT A NAME FOR THIS PLATE"}
                    </h4>
                  }
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div>You do not have orders yet</div>
      )}
    </div>
  );
}
