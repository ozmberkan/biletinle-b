import {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById,
} from "../repositories/event.repo.js";

export const getAllEventsService = async () => {
  try {
    const events = await getAllEvents();
    return events;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getEventByIdService = async (id) => {
  try {
    const event = await getEventById(id);
    if (!event) {
      throw new Error(`Bu id ile bir etkinlik bulunamadı: ${id}`);
    }
    return event;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createEventService = async (data) => {
  try {
    const event = await createEvent(data);
    return event;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateEventService = async (id, data) => {
  try {
    const event = await updateEvent(id, data);
    if (!event) {
      throw new Error(`Bu id ile bir etkinlik bulunamadı: ${id}`);
    }
    return event;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteEventService = async (id) => {
  try {
    const event = await deleteEvent(id);
    if (!event) {
      throw new Error(`Bu id ile bir etkinlik bulunamadı: ${id}`);
    }
    return event;
  } catch (error) {
    throw new Error(error.message);
  }
};
