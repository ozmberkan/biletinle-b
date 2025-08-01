import { pagination } from "../functions/pagination.js";
import { response } from "../functions/response.js";
import logger from "../logger/logger.js";
import {
  createTicketService,
  deleteTicketService,
  getAllTicketsService,
  getTicketByIdService,
  getTicketsByUserIdService,
  updateTicketService,
} from "../services/ticket.service.js";

export const getAllTicketsController = async (req, res) => {
  try {
    const tickets = await getAllTicketsService();
    logger.info("Tüm biletler başarıyla getirildi.");

    response(
      200,
      true,
      "",
      pagination(req.query.pageSize, req.query.pageIndex, tickets),
      res
    );
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const createTicketController = async (req, res) => {
  try {
    const newTicket = await createTicketService(req.body);
    logger.info("Yeni bilet başarıyla oluşturuldu.");
    response(201, true, "Bilet başarıyla oluşturuldu", newTicket, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const deleteTicketController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTicket = await deleteTicketService(Number(id));
    logger.info(`Bilet ${id} başarıyla silindi.`);
    response(200, true, "", deletedTicket, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const updateTicketController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTicket = await updateTicketService(Number(id), req.body);
    logger.info(`Bilet ${id} başarıyla güncellendi.`);
    response(200, true, "", updatedTicket, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const getTicketByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await getTicketByIdService(Number(id));
    logger.info(`Bilet ${id} başarıyla getirildi.`);
    return response(200, true, "", ticket, res);
  } catch (error) {
    return response(500, false, error.message, null, res);
  }
};

export const getTicketsByUserIdController = async (req, res) => {
  try {
    const tickets = await getTicketsByUserIdService(Number(req.params.userId));
    logger.info(
      `Kullanıcı ${req.params.userId} için biletler başarıyla getirildi.`
    );
    response(
      200,
      true,
      "",
      pagination(req.query.pageSize, req.query.pageIndex, tickets),
      res
    );
  } catch (error) {
    return response(500, false, error.message, null, res);
  }
};
