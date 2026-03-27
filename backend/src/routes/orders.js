import express from "express";
import OrdersControllers from "../controllers/orders";

const OrderRouter = express.Router();
const OrderControllers = new OrdersControllers();

OrderRouter.get("/", async (req, res) => {
  const { success, statusCode, body } = await OrderControllers.getOrders(
    req.body,
  );
  res.status(statusCode).send({ success, body, statusCode });
});

OrderRouter.get("/availables/", async (req, res) => {
  const { body, success, statusCode } =
    await OrderControllers.getAvailableOrders();
  res.status(statusCode).send({ body, success, statusCode });
});

OrderRouter.post("/", async (req, res) => {
  const { body, success, statusCode } = await OrderControllers.addOrders(
    req.body,
  );
  res.status(statusCode).send({ body, success, statusCode });
});

OrderRouter.delete("/:id", async (req, res) => {
  const OrderId = req.params.id;
  const { success, statusCode, body } =
    await OrderControllers.deleteOrders(OrderId);

  res.status(statusCode).send({ success, statusCode, body });
});

OrderRouter.put("/:id", async (req, res) => {
  const { success, statusCode, body } = await OrderControllers.updateOrders(
    req.params.id,
    req.body,
  );

  res.status(statusCode).send({ success, statusCode, body });
});

export default OrderRouter;
