import {
  createEventController,
  deleteEventController,
  getAllEventsController,
  getEventByIdController,
  updateEventController,
} from "../controllers/event.controller.js";

import express from "express";

const router = express.Router();

router.post("/", getAllEventsController);
router.get("/:id", getEventByIdController);
router.post("/create", createEventController);
router.put("/:id", updateEventController);
router.delete("/:id", deleteEventController);

export default router;
