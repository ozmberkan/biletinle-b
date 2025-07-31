import { prisma } from "../prisma/prisma.js";

export const getAllTickets = async () => {
  return await prisma.ticket.findMany({
    include: {
      event: {
        select: {
          name: true,
          date: true,
          location: true,
          createdAt: true,
          updatedAt: true,
          eventTypeId: true,
        },
      },
      ticketType: {
        select: {
          name: true,
        },
      },
      orders: true,
    },
  });
};

export const getTicketById = async (id) => {
  return await prisma.ticket.findUnique({
    where: { id },
  });
};

export const createTicket = async (data) => {
  return await prisma.ticket.create({
    data,
    include: {
      event: true,
      ticketType: true,
    },
  });
};

export const updateTicket = async (id, data) => {
  return await prisma.ticket.update({
    where: { id },
    data,
    include: {
      event: true,
      ticketType: true,
    },
  });
};

export const deleteTicket = async (id) => {
  return await prisma.ticket.delete({
    where: { id },
    include: {
      event: true,
      ticketType: true,
    },
  });
};

export const getTicketsByUserId = async (userId) => {
  return await prisma.ticket.findMany({
    where: { userId },
    include: {
      event: true,
      ticketType: true,
    },
  });
};
