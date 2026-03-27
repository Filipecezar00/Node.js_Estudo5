import OrdersDataAccess from "../dataAccess/orders.js";
import { ok, serverError } from "../helpers/httpResponse.js";

export default class OrdersControllers {
  constructor() {
    this.dataAccess = new OrdersDataAccess();
  }
  async Orders() {
    try {
      const orders = await this.dataAccess.getOrders();
      console.log(orders);

      return ok(orders);
    } catch (e) {
      return serverError(e);
    }
  }

  async getAvailableOrders() {
    try {
      const orders = await this.dataAccess.getAvailableOrders();

      return ok(orders);
    } catch (error) {
      return serverError(error);
    }
  }

  async addOrders(OrdersData) {
    try {
      const result = await this.dataAccess.addOrders(OrdersData);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async deleteOrders(OrdersId) {
    try {
      const result = await this.dataAccess.deleteOrders(OrdersId);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async updateOrders(OrdersId, OrdersData) {
    try {
      const result = await this.dataAccess.updateOrders(OrdersId, OrdersData);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }
}
