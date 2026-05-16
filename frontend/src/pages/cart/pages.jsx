import { useCartContext } from "../../contexts/useCartContext";
import styles from "./page.module.css";
import { FaMinus } from "react-icons/fa";

export default function Cart() {
  const { cartItens } = useCartContext();

  console.log(cartItens);

  if (!cartItens.length) {
    return (
      <div>
        <h1>Your cart is empty...</h1>
        <button>See our Specialites</button>
      </div>
    );
  }
  return (
    <div className={styles.pageContainer}>
      <h1>Your Itens:</h1>
      <section>
        <div className={styles.itensListContainer}>
          {cartItens.map((item) => (
            <div className={styles.itemContainer} key={item._id}>
              <img src={item.imgUrl} alt="" />
              <div className={styles.itemContent}>
                <h2>{item.name}</h2>
                <p>[{String(item.ingredients)}]</p>
                <p>{item.description}</p>
                <div className={styles.portionContainer}>
                  <p>Portions:</p>
                  <p>{item.quantity}</p>
                  <div className={styles.portionBtns}>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <button>
                  <FaMinus /> Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <button className={styles.confirmBtn}>Confirm your order</button>
    </div>
  );
}
