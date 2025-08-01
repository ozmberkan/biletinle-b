import { pagination } from "../functions/pagination.js";
import { response } from "../functions/response.js";
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
    response(
      200,
      true,
      "",
      pagination(req.query.pageSize, req.query.pageIndex, events),
      res
    );
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const createEventController = async (req, res) => {
  try {
    const newEvent = await createEventService(req.body);
    response(201, true, "", newEvent, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const deleteEventController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await deleteEventService(Number(id));

    response(200, true, "", deletedEvent, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const updateEventController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await updateEventService(Number(id), req.body);

    response(200, true, "", updatedEvent, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const getEventByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await getEventByIdService(Number(id));

    response(200, true, "", event, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};
