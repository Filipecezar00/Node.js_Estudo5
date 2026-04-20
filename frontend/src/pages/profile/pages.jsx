import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import orderServices from "../../services/order";
import styles from "./page.module.css";
import { LuLogOut, LuTimer } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

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

      <button onClick={handleLogout}>
        {" "}
        <LuLogOut /> Logout
      </button>

      {ordersList.length > 0 ? (
        <div className={styles.ordersContainer}>
          {ordersList.map((order) => (
            <div key={order._id} className={styles.orderContainer}>
              {order.pickupStatus === "Pending" ? (
                <p className={`${styles.pickupStatus} ${styles.pending} `}>
                  {" "}
                  <LuTimer />
                  {order.pickupStatus}
                </p>
              ) : null}
              {order.pickupStatus === "Complete" ? (
                <p className={`${styles.pickupStatus} ${styles.complete}`}>
                  {" "}
                  <FaCheckCircle />
                  {order.pickupStatus}
                </p>
              ) : null}
              {order.pickupStatus === "Canceled" ? (
                <p className={`${styles.pickupStatus} ${styles.canceled}`}>
                  {" "}
                  <MdCancel />
                  {order.pickupStatus}
                </p>
              ) : null}
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
