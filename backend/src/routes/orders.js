import express from "express";
import OrdersControllers from "../controllers/orders.js";

const ordersRouter = express.Router();
const OrderControllers = new OrdersControllers();

const handleResponse = (res, result) => {
  const { success, statusCode, body } = result;
  res.status(statusCode).json({ success, body, statusCode });
};

ordersRouter.get("/", async (req, res, next) => {
  try {
    const result = await OrderControllers.getOrders(req.query);
    handleResponse(res, result);
  } catch (error) {
    next(error);
  }
});

ordersRouter.get("/userorders/:id", async (req, res, next) => {
  try {
    const result = await OrderControllers.getOrdersByUserId(req.params.id);
    handleResponse(res, result);
  } catch (error) {
    next(error);
  }
});

ordersRouter.post("/", async (req, res, next) => {
  try {
    const result = await OrderControllers.addOrders(req.body);
    handleResponse(res, result);
  } catch (error) {
    next(error);
  }
});

ordersRouter.delete("/:id", async (req, res, next) => {
  try {
    const result = await OrderControllers.deleteOrders(req.params.id);
    handleResponse(res, result);
  } catch (error) {
    next(error);
  }
});

ordersRouter.put("/:id", async (req, res, next) => {
  try {
    const result = await OrderControllers.updateOrders(req.params.id, req.body);
    handleResponse(res, result);
  } catch (error) {
    next(error);
  }
});

export default ordersRouter;
