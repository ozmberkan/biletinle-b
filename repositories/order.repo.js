import { prisma } from "../prisma/prisma.js";

export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      ticket: true,
      user: true,
    },
  });
};

export const getOrderById = async (id) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      ticket: true,
      user: true,
    },
  });
};

export const createOrder = async (data) => {
  return await prisma.order.create({
    data,
    include: {
      ticket: true,
      user: true,
    },
  });
};

export const updateOrder = async (id, data) => {
  return await prisma.order.update({
    where: { id },
    data,
    include: {
      ticket: true,
      user: true,
    },
  });
};

export const deleteOrder = async (id) => {
  return await prisma.order.delete({
    where: { id },
    include: {
      ticket: true,
      user: true,
    },
  });
};
