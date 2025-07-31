import {
  createTicketController,
  deleteTicketController,
  getAllTicketsController,
  getTicketByIdController,
  updateTicketController,
} from "../controllers/ticket.controller.js";

import express from "express";

const router = express.Router();

router.get("/", getAllTicketsController);
router.get("/:id", getTicketByIdController);
router.post("/create", createTicketController);
router.put("/:id", updateTicketController);
router.delete("/:id", deleteTicketController);

export default router;
