import {
  getAllTickets,
  getTicketById,
  createTicket,
  deleteTicket,
  updateTicket,
} from "../repositories/ticket.repo.js";

export const getAllTicketsService = async () => {
  try {
    const tickets = await getAllTickets();
    return tickets;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getTicketByIdService = async (id) => {
  try {
    const ticket = await getTicketById(id);
    if (!ticket) {
      throw new Error(`Bu id ile bir bilet bulunamadı: ${id}`);
    }
    return ticket;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createTicketService = async (data) => {
  try {
    const ticket = await createTicket(data);
    return ticket;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateTicketService = async (id, data) => {
  try {
    const ticket = await updateTicket(id, data);
    if (!ticket) {
      throw new Error(`Bu id ile bir bilet bulunamadı: ${id}`);
    }
    return ticket;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteTicketService = async (id) => {
  try {
    const ticket = await deleteTicket(id);
    if (!ticket) {
      throw new Error(`Bu id ile bir bilet bulunamadı: ${id}`);
    }
    return ticket;
  } catch (error) {
    throw new Error(error.message);
  }
};
