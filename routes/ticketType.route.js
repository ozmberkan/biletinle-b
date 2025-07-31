import {
  getTicketTypeByIdController,
  createTicketTypeController,
  updateTicketTypeController,
  deleteTicketTypeController,
  getAllTicketTypesController,
} from "../controllers/ticketType.controller.js";

import express from "express";

const router = express.Router();

router.get("/", getAllTicketTypesController);
router.get("/:id", getTicketTypeByIdController);
router.post("/", createTicketTypeController);
router.put("/:id", updateTicketTypeController);
router.delete("/:id", deleteTicketTypeController);

export default router;
