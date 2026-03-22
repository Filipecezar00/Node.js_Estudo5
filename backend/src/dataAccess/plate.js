import { Mongo } from "../../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = "plates";

export default class PlatesDataAccess {
  async getPlates() {
    const result = await Mongo.db.collection(collectionName).find({}).toArray();
    return result;
  }

  async getAvailablePlates() {
    const result = await Mongo.db
      .collection(collectionName)
      .find({ available: true })
      .toArray();
    return result;
  }

  async addPlate(plateData) {
    if (Array.isArray(plateData)) {
      return await Mongo.db.collection(collectionName).insertMany(plateData);
    }
    return await Mongo.db.collection(collectionName).insertOne(plateData);
  }

  async deletePlate(plateId) {
    if (!ObjectId.isValid(plateId)) throw new Error("ID inválido");
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndDelete({ _id: new ObjectId(plateId) });
    return result;
  }

  async updatePlate(plateId, plateData) {
    if (!ObjectId.isValid(plateId)) throw new Error("ID inválido");
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndUpdate(
        { _id: new ObjectId(plateId) },
        { $set: plateData },
        { returnDocument: "after" },
      );
    return result;
  }
}
