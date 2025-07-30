import { prisma } from "../prisma/prisma.js";

export const getAllEvents = async () => {
  return await prisma.event.findMany({
    include: {
      eventType: true,
      tickets: true,
    },
  });
};

export const getEventById = async (id) => {
  return await prisma.event.findUnique({
    where: { id: Number(id) },
    include: {
      eventType: true,
      tickets: true,
    },
  });
};

export const createEvent = async (data) => {
  return await prisma.event.create({
    data: data,
    include: {
      eventType: true,
      tickets: true,
    },
  });
};

export const updateEvent = async (id, data) => {
  return await prisma.event.update({
    where: { id: Number(id) },
    data: data,
    include: {
      eventType: true,
      tickets: true,
    },
  });
};

export const deleteEvent = async (id) => {
  return await prisma.event.delete({
    where: { id: Number(id) },
  });
};
