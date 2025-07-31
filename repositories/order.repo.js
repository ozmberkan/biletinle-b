import { prisma } from "../prisma/prisma.js";

export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      ticket: true,
      user: {
        select: {
          id: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      },
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

// Kullanıcı ID'sine göre siparişleri al

export const getOrdersByUserId = async (userId) => {
  return await prisma.order.findMany({
    where: { userId },
    include: {
      ticket: true,
    },
  });
};
