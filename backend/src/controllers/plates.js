import PlatesDataAccess from "../dataAccess/plate.js";
import { ok, serverError } from "../helpers/httpResponse.js";

export default class PlatesControllers {
  constructor() {
    this.dataAccess = new PlatesDataAccess();
  }
  async getPlates() {
    try {
      const plates = await this.dataAccess.getPlates();
      console.log(plates);

      return ok(plates);
    } catch (e) {
      return serverError(e);
    }
  }

  async getAvailablePlates() {
    try {
      const plates = await this.dataAccess.getAvailablePlates();

      return ok(plates);
    } catch (error) {
      return serverError(error);
    }
  }

  async addPlates(plateData) {
    try {
      const result = await this.dataAccess.addPlates(plateData);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async deletePlate(plateId) {
    try {
      const result = await this.dataAccess.deletePlate(plateId);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async updatePlate(plateId, plateData) {
    try {
      const result = await this.dataAccess.updatePlate(plateId, plateData);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }
}
