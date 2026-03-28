import OrdersDataAccess from "../dataAccess/orders.js";
import { ok, serverError } from "../helpers/httpResponse.js";

export default class OrdersControllers {
  constructor() {
    this.dataAccess = new OrdersDataAccess();
  }
  async getOrders() {
    try {
      const orders = await this.dataAccess.getOrders();

      return ok(orders);
    } catch (error) {
      console.error("ERRO NO PROCESSO DA ROTA GET:", error);
      return serverError(error);
    }
  }

  async getOrdersByUserId(userId) {
    try {
      const orderId = await this.dataAccess.getOrdersByUserId(userId);

      return ok(orderId);
    } catch (error) {
      console.error("ERRO NO PROCESSO DA ROTA GET DO ID USER:", error);
      return serverError(error);
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
      if (!OrdersData.userId || !OrdersData.items) {
        return badRequest("Campos obrigatórios faltando");
      }
      const result = await this.dataAccess.addOrders(OrdersData);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async deleteOrders(OrdersId) {
    try {
      const result = await this.dataAccess.deleteOrder(OrdersId);
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
