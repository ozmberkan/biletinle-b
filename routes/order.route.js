import {
  createOrderController,
  deleteOrderController,
  getAllOrdersController,
  getOrderByIdController,
  updateOrderController,
} from "../controllers/order.controller.js";

import express from "express";

const router = express.Router();

router.get("/", getAllOrdersController);
router.get("/:id", getOrderByIdController);
router.post("/create", createOrderController);
router.put("/:id", updateOrderController);
router.delete("/:id", deleteOrderController);

export default router;
