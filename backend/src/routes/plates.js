import express from "express";
import UsersControllers from "../controllers/users.js";

const usersRouter = express.Router();

const usersControllers = new UsersControllers();

usersRouter.get("/", async (req, res) => {
  const { success, statusCode, body } = await usersControllers.getUsers();

  res.status(statusCode).send({ success, body, statusCode });
});

usersRouter.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  const { success, statusCode, body } =
    await usersControllers.deleteUser(userId);

  res.status(statusCode).send({ success, statusCode, body });
});

usersRouter.put("/:id", async (req, res) => {
  const { success, statusCode, body } = await usersControllers.updateUser(
    req.params.id,
    req.body,
  );

  res.status(statusCode).send({ success, statusCode, body });
});

export default usersRouter;
