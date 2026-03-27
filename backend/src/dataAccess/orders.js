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
    const { itens, ...OrderDataRest } = OrderData;

    OrderDataRest.createdAt = new Date();
    OrderDataRest.pickupStatus = "Pending";
    OrderDataRest.userId = new ObjectId(OrderDataRest.userId);

    const newOrder = await Mongo.db
      .collection(collectionName)
      .insertOne(OrderDataRest);

    if (!newOrder.insertedId) {
      throw new Error("Order cannot be inserted");
    }

    itens.map((item) => {
      item.plateId = new ObjectId(item.plateId);
      item.orderId = new ObjectId(newOrder.insertedId);
    });

    const result = await Mongo.db.collection("OrderItens").insertMany(itens);

    return result;
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
