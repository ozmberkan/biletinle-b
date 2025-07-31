import { prisma } from "../prisma/prisma.js";

export const getAllTicketTypes = async () => {
  return await prisma.ticketType.findMany({});
};

export const getTicketTypeById = async (id) => {
  return await prisma.ticketType.findUnique({
    where: { id },
  });
};

export const createTicketType = async (data) => {
  return await prisma.ticketType.create({
    data,
  });
};

export const updateTicketType = async (id, data) => {
  return await prisma.ticketType.update({
    where: { id },
    data,
  });
};

export const deleteTicketType = async (id) => {
  return await prisma.ticketType.delete({
    where: { id },
  });
};
