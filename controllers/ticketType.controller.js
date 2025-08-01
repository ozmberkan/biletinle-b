import { response } from "../functions/response.js";
import logger from "../logger/logger.js";
import {
  createTicketTypeService,
  deleteTicketTypeService,
  getAllTicketTypesService,
  getTicketTypeByIdService,
  updateTicketTypeService,
} from "../services/ticketType.service.js";

export const getAllTicketTypesController = async (req, res) => {
  try {
    const ticketTypes = await getAllTicketTypesService();
    logger.info("Tüm bilet türleri başarıyla getirildi.");
    response(200, true, "", ticketTypes, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const getTicketTypeByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const ticketType = await getTicketTypeByIdService(id);
    logger.info(`Bilet türü ${id} başarıyla getirildi.`);
    response(200, true, "", ticketType, res);
  } catch (error) {
    response(404, false, error.message, null, res);
  }
};

export const createTicketTypeController = async (req, res) => {
  const data = req.body;
  try {
    const newTicketType = await createTicketTypeService(data);
    logger.info("Yeni bilet türü başarıyla oluşturuldu.");
    response(201, true, "Bilet türü başarıyla oluşturuldu", newTicketType, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const updateTicketTypeController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedTicketType = await updateTicketTypeService(id, data);
    logger.info(`Bilet türü ${id} başarıyla güncellendi.`);
    response(
      200,
      true,
      "Bilet türü başarıyla güncellendi",
      updatedTicketType,
      res
    );
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const deleteTicketTypeController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTicketTypeService(id);
    logger.info(`Bilet türü ${id} başarıyla silindi.`);
    res.status(204).send();
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};
