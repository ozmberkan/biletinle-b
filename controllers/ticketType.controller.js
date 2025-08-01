import { response } from "../functions/response.js";
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
    response(200, true, "", ticketTypes, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const getTicketTypeByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const ticketType = await getTicketTypeByIdService(id);
    response(200, true, "", ticketType, res);
  } catch (error) {
    response(404, false, error.message, null, res);
  }
};

export const createTicketTypeController = async (req, res) => {
  const data = req.body;
  try {
    const newTicketType = await createTicketTypeService(data);
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
    res.status(204).send();
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};
