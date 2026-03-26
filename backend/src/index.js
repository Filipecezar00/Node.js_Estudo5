import express from "express";
import cors from "cors";
import { Mongo } from "../database/mongo.js";
import { config } from "dotenv";
import authRouter from "./auth/auth.js";
import usersRouter from "./routes/users.js";
import platesRouter from "./routes/plates.js";

config();

async function main() {
  const hostname = "Localhost";
  const port = 3000;

  const app = express();

  try {
    const mongoConnection = await Mongo.connect({
      mongoConnectionString: process.env.MONGO_CS,
      mongoDbName: process.env.MONGO_DB_NAME,
    });
    console.log(mongoConnection);
  } catch (error) {
    console.error("Erro ao Conectar no banco:", error);
  }

  app.use(express.json());
  app.use(cors());

  app.get("/ping", (req, res) => res.send("pong"));

  app.get("/", (req, res) => {
    res.send({
      success: true,
      statusCode: 200,
      body: "Welcome to MyGastronomy!",
    });
  });

  app.use("/auth", authRouter);
  app.use("/users", usersRouter);
  app.get("/teste-direto", (req, res) => res.send("OK"));
  app.use("/plates", platesRouter);

  app.listen(port, () => {
    console.log(`Server Running on http://${hostname}:${port}`);
  });
}

main();
