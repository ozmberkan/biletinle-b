import { pagination } from "../functions/pagination.js";
import {
  createEventService,
  deleteEventService,
  getAllEventsService,
  getEventByIdService,
  updateEventService,
} from "../services/event.service.js";

export const getAllEventsController = async (req, res) => {
  try {
    const events = await getAllEventsService();
    return res.status(200).json({
      success: true,
      data: pagination(req.query.pageSize, req.query.pageIndex, events),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createEventController = async (req, res) => {
  try {
    const newEvent = await createEventService(req.body);
    return res.status(201).json({
      success: true,
      data: newEvent,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteEventController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await deleteEventService(Number(id));
    if (!deletedEvent) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: deletedEvent,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateEventController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await updateEventService(Number(id), req.body);
    if (!updatedEvent) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: updatedEvent,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getEventByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await getEventByIdService(Number(id));
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
