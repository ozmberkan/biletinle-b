import { pagination } from "../functions/pagination.js";
import { response } from "../functions/response.js";
import logger from "../logger/logger.js";
import {
  createOrderService,
  deleteOrderService,
  getAllOrdersService,
  getOrderByIdService,
  getOrdersByUserIdService,
  updateOrderService,
} from "../services/order.service.js";

export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await getAllOrdersService();
    logger.info("Tüm siparişler başarıyla getirildi.");
    return response(
      200,
      true,
      "",
      pagination(req.query.pageSize, req.query.pageIndex, orders),
      res
    );
  } catch (error) {
    return response(500, false, error.message, null, res);
  }
};

export const getOrderByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await getOrderByIdService(Number(id));
    logger.info(`Sipariş ${id} başarıyla getirildi.`);

    return response(200, true, "", order, res);
  } catch (error) {
    return response(500, false, error.message, null, res);
  }
};

export const createOrderController = async (req, res) => {
  try {
    const order = await createOrderService(req.body);
    logger.info("Yeni sipariş başarıyla oluşturuldu.");
    return response(201, true, "", order, res);
  } catch (error) {
    return response(500, false, error.message, null, res);
  }
};

export const updateOrderController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await updateOrderService(Number(id), req.body);
    logger.info(`Sipariş ${id} başarıyla güncellendi.`);

    return response(200, true, "", updatedOrder, res);
  } catch (error) {
    return response(500, false, error.message, null, res);
  }
};

export const deleteOrderController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await deleteOrderService(Number(id));
    logger.info(`Sipariş ${id} başarıyla silindi.`);
    return response(200, true, "", deletedOrder, res);
  } catch (error) {
    return response(500, false, error.message, null, res);
  }
};

export const getOrdersByUserIdController = async (req, res) => {
  try {
    const orders = await getOrdersByUserIdService(Number(req.params.userId));
    logger.info(
      `Kullanıcı ${req.params.userId} için siparişler başarıyla getirildi.`
    );
    return response(
      200,
      true,
      "",
      pagination(req.query.pageSize, req.query.pageIndex, orders),
      res
    );
  } catch (error) {
    return response(500, false, error.message, null, res);
  }
};
