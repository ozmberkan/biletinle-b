import {
  createOrderController,
  deleteOrderController,
  getAllOrdersController,
  getOrderByIdController,
  getOrdersByUserIdController,
  updateOrderController,
} from "../controllers/order.controller.js";

import express from "express";

const router = express.Router();

router.get("/", getAllOrdersController);
router.get("/:id", getOrderByIdController);
router.post("/create", createOrderController);
router.put("/:id", updateOrderController);
router.delete("/:id", deleteOrderController);
router.get("/user/:userId", getOrdersByUserIdController);

export default router;
