import { pagination } from "../functions/pagination.js";
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

    return res.status(200).json({
      success: true,
      data: pagination(req.query.pageSize, req.query.pageIndex, tickets),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createTicketController = async (req, res) => {
  try {
    const newTicket = await createTicketService(req.body);
    return res.status(201).json({
      success: true,
      data: newTicket,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTicketController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTicket = await deleteTicketService(Number(id));
    if (!deletedTicket) {
      return res.status(404).json({
        success: false,
        message: "Bilet bulunamadı",
      });
    }
    return res.status(200).json({
      success: true,
      data: deletedTicket,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTicketController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTicket = await updateTicketService(Number(id), req.body);
    if (!updatedTicket) {
      return res.status(404).json({
        success: false,
        message: "Bilet bulunamadı",
      });
    }
    return res.status(200).json({
      success: true,
      data: updatedTicket,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTicketByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await getTicketByIdService(Number(id));
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Bilet bulunamadı",
      });
    }
    return res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTicketsByUserIdController = async (req, res) => {
  try {
    const tickets = await getTicketsByUserIdService(Number(req.params.userId));

    const pageSize = parseInt(req.query.pageSize) || 10;
    const pageIndex = parseInt(req.query.pageIndex) || 0;
    const count = tickets.length;
    const page = Math.floor(count / pageSize) + 1;

    const paginatedTickets = tickets
      .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

    const hasPrev = pageIndex > 0;
    const hasNext = (pageIndex + 1) * pageSize < count;

    return res.status(200).json({
      success: true,
      data: {
        items: paginatedTickets,
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
