import {
  getEventTypeByIdController,
  createEventTypeController,
  updateEventTypeController,
  deleteEventTypeController,
  getAllEventTypesController,
} from "../controllers/eventType.controller.js";

import express from "express";

const router = express.Router();

router.get("/", getAllEventTypesController);
router.get("/:id", getEventTypeByIdController);
router.post("/", createEventTypeController);
router.put("/:id", updateEventTypeController);
router.delete("/:id", deleteEventTypeController);

export default router;
