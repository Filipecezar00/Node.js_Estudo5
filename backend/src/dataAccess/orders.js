import { Mongo } from "../../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = "orders";

export default class OrdersDataAccess {
  async getOrders() {
    const result = await Mongo.db.collection(collectionName).find({}).toArray();
    return result;
  }

  async getAvailableOrders() {
    const result = await Mongo.db
      .collection(collectionName)
      .find({ available: true })
      .toArray();
    return result;
  }

  async addOrders(OrderData) {
    if (Array.isArray(OrderData)) {
      return await Mongo.db.collection(collectionName).insertMany(OrderData);
    }
    return await Mongo.db.collection(collectionName).insertOne(OrderData);
  }

  async deleteOrder(OrderId) {
    if (!ObjectId.isValid(OrderId)) throw new Error("ID inválido");
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndDelete({ _id: new ObjectId(OrderId) });
    return result;
  }

  async updateOrder(OrderId, OrderData) {
    if (!ObjectId.isValid(OrderId)) throw new Error("ID inválido");
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndUpdate(
        { _id: new ObjectId(OrderId) },
        { $set: OrderData },
        { returnDocument: "after" },
      );
    return result;
  }
}
