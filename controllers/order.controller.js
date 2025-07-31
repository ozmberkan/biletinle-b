import {
  createOrderService,
  updateOrderService,
  getAllOrdersService,
  getOrderByIdService,
  deleteOrderService,
} from "../services/order.service.js";

export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await getAllOrdersService();

    const pageSize = parseInt(req.query.pageSize) || 10;
    const pageIndex = parseInt(req.query.pageIndex) || 0;
    const count = orders.length;
    const page = Math.floor(count / pageSize) + 1;

    const paginatedOrders = orders
      .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

    const hasPrev = pageIndex > 0;
    const hasNext = (pageIndex + 1) * pageSize < count;

    return res.status(200).json({
      success: true,
      data: {
        items: paginatedOrders,
        count,
        page,
        pageSize,
        pageIndex,
        hasPrev,
        hasNext,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOrderByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await getOrderByIdService(Number(id));

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createOrderController = async (req, res) => {
  try {
    const order = await createOrderService(req.body);
    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateOrderController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await updateOrderService(Number(id), req.body);
    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteOrderController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await deleteOrderService(Number(id));
    if (!deletedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: deletedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
