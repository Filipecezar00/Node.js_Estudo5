import express from "express";
import PlatesControllers from "../controllers/plates.js";

const platesRouter = express.Router();
const platesControllers = new PlatesControllers();

platesRouter.get("/", async (req, res) => {
  const { success, statusCode, body } = await platesControllers.getPlates(
    req.body,
  );
  res.status(statusCode).send({ success, body, statusCode });
});

platesRouter.get("/availables/", async (req, res) => {
  const { body, success, statusCode } =
    await platesControllers.getAvailablePlates();
  res.status(statusCode).send({ body, success, statusCode });
});

platesRouter.post("/", async (req, res) => {
  const { body, success, statusCode } = await platesControllers.addPlate(
    req.body,
  );
  res.status(statusCode).send({ body, success, statusCode });
});

platesRouter.delete("/:id", async (req, res) => {
  const platesId = req.params.id;
  const { success, statusCode, body } =
    await platesControllers.deletePlate(platesId);

  res.status(statusCode).send({ success, statusCode, body });
});

platesRouter.put("/:id", async (req, res) => {
  const { success, statusCode, body } = await platesControllers.updatePlate(
    req.params.id,
    req.body,
  );

  res.status(statusCode).send({ success, statusCode, body });
});

export default platesRouter;
