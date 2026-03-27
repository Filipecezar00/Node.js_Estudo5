import express from "express";
import OrdersControllers from "../controllers/orders.js";

const ordersRouter = express.Router();
const OrderControllers = new OrdersControllers();

ordersRouter.get("/", async (req, res) => {
  const { success, statusCode, body } = await OrderControllers.getOrders(
    req.body,
  );
  res.status(statusCode).send({ success, body, statusCode });
});
ordersRouter.post("/", async (req, res) => {
  const { body, success, statusCode } = await OrderControllers.addOrders(
    req.body,
  );
  res.status(statusCode).send({ body, success, statusCode });
});

ordersRouter.delete("/:id", async (req, res) => {
  const OrderId = req.params.id;
  const { success, statusCode, body } =
    await OrderControllers.deleteOrders(OrderId);

  res.status(statusCode).send({ success, statusCode, body });
});

ordersRouter.put("/:id", async (req, res) => {
  const { success, statusCode, body } = await OrderControllers.updateOrders(
    req.params.id,
    req.body,
  );

  res.status(statusCode).send({ success, statusCode, body });
});

export default ordersRouter;
