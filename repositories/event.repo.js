import { prisma } from "../prisma/prisma.js";

export const getAllEvents = async () => {
  return await prisma.event.findMany({
    include: {
      eventType: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const getEventById = async (id) => {
  return await prisma.event.findUnique({
    where: { id: Number(id) },
  });
};

export const createEvent = async (data) => {
  return await prisma.event.create({
    data: data,
  });
};

export const updateEvent = async (id, data) => {
  return await prisma.event.update({
    where: { id: Number(id) },
    data: data,
  });
};

export const deleteEvent = async (id) => {
  return await prisma.event.delete({
    where: { id: Number(id) },
  });
};
