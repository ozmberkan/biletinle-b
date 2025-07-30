import {
  getAllEventTypes,
  createEventType,
  updateEventType,
  deleteEventType,
  getEventTypeById,
} from "../repositories/eventType.repo.js";

export const getAllEventTypesService = async () => {
  try {
    const eventTypes = await getAllEventTypes();
    return eventTypes;
  } catch (error) {
    throw new Error("Etkinlik türleri alınırken bir hata oluştu");
  }
};

export const getEventTypeByIdService = async (id) => {
  try {
    const eventType = await getEventTypeById(Number(id));
    if (!eventType) {
      throw new Error("Etkinlik türü bulunamadı");
    }
    return eventType;
  } catch (error) {
    throw new Error("Etkinlik türü alınırken bir hata oluştu");
  }
};

export const createEventTypeService = async (data) => {
  try {
    const newEventType = await createEventType(data);
    return newEventType;
  } catch (error) {
    throw new Error("Etkinlik türü oluşturulurken bir hata oluştu");
  }
};

export const updateEventTypeService = async (id, data) => {
  try {
    const updatedEventType = await updateEventType(Number(id), data);
    return updatedEventType;
  } catch (error) {
    throw new Error("Etkinlik türü güncellenirken bir hata oluştu");
  }
};

export const deleteEventTypeService = async (id) => {
  try {
    const deletedEventType = await deleteEventType(Number(id));
    return deletedEventType;
  } catch (error) {
    throw new Error("Etkinlik türü silinirken bir hata oluştu");
  }
};
