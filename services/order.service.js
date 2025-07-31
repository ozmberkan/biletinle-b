import {
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  createOrder,
  getOrdersByUserId,
} from "../repositories/order.repo.js";

export const getAllOrdersService = async () => {
  try {
    const orders = await getAllOrders();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOrderByIdService = async (id) => {
  try {
    const order = await getOrderById(id);
    if (!order) {
      throw new Error(`Bu id ile bir sipariş bulunamadı: ${id}`);
    }
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createOrderService = async (data) => {
  try {
    const order = await createOrder(data);
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateOrderService = async (id, data) => {
  try {
    const order = await updateOrder(id, data);
    if (!order) {
      throw new Error(`Bu id ile bir sipariş bulunamadı: ${id}`);
    }
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteOrderService = async (id) => {
  try {
    const order = await deleteOrder(id);
    if (!order) {
      throw new Error(`Bu id ile bir sipariş bulunamadı: ${id}`);
    }
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOrdersByUserIdService = async (userId) => {
  try {
    const orders = await getOrdersByUserId(userId);
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};
