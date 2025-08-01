import {
  createEventTypeService,
  getAllEventTypesService,
  getEventTypeByIdService,
  deleteEventTypeService,
  updateEventTypeService,
} from "../services/eventType.service.js";
import { response } from "../functions/response.js";
import logger from "../logger/logger.js";

export const getAllEventTypesController = async (req, res) => {
  try {
    const eventTypes = await getAllEventTypesService();
    logger.info("Tüm etkinlik türleri başarıyla getirildi.");
    response(200, true, "", eventTypes, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const getEventTypeByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const eventType = await getEventTypeByIdService(id);
    logger.info(`Etkinlik türü ${id} başarıyla getirildi.`);
    response(200, true, "", eventType, res);
  } catch (error) {
    response(404, false, error.message, null, res);
  }
};

export const createEventTypeController = async (req, res) => {
  const data = req.body;
  try {
    const newEventType = await createEventTypeService(data);
    logger.info("Yeni etkinlik türü başarıyla oluşturuldu.");
    response(
      201,
      true,
      "Etkinlik türü başarıyla oluşturuldu",
      newEventType,
      res
    );
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const updateEventTypeController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedEventType = await updateEventTypeService(id, data);
    logger.info(`Etkinlik türü ${id} başarıyla güncellendi.`);
    response(
      200,
      true,
      "Etkinlik türü başarıyla güncellendi",
      updatedEventType,
      res
    );
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const deleteEventTypeController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteEventTypeService(id);
    logger.info(`Etkinlik türü ${id} başarıyla silindi.`);
    response(204, true, "", null, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};
