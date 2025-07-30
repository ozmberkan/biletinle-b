import { prisma } from "../prisma/prisma.js";

export const getAllEventTypes = async () => {
  return await prisma.eventType.findMany();
};

export const getEventTypeById = async (id) => {
  return await prisma.eventType.findUnique({
    where: { id },
  });
};

export const createEventType = async (data) => {
  return await prisma.eventType.create({
    data,
  });
};

export const updateEventType = async (id, data) => {
  return await prisma.eventType.update({
    where: { id },
    data,
  });
};

export const deleteEventType = async (id) => {
  return await prisma.eventType.delete({
    where: { id },
  });
};
