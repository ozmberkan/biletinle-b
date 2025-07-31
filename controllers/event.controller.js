import {
  getAllEventsService,
  createEventService,
  deleteEventService,
  updateEventService,
  getEventByIdService,
} from "../services/event.service.js";

export const getAllEventsController = async (req, res) => {
  try {
    const events = await getAllEventsService();

    const pageSize = parseInt(req.query.pageSize) || 10;
    const pageIndex = parseInt(req.query.pageIndex) || 0;
    const count = events.length;
    const page = Math.floor(count / pageSize) + 1;

    const paginatedEvents = events
      .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

    const hasPrev = pageIndex > 0;
    const hasNext = (pageIndex + 1) * pageSize < count;

    return res.status(200).json({
      success: true,
      data: {
        events: paginatedEvents,
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
