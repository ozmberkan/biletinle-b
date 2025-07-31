import {
  getAllTicketTypes,
  createTicketType,
  updateTicketType,
  deleteTicketType,
  getTicketTypeById,
} from "../repositories/ticketType.repo.js";

export const getAllTicketTypesService = async () => {
  try {
    const ticketTypes = await getAllTicketTypes();
    return ticketTypes;
  } catch (error) {
    throw new Error("Bilet türleri alınırken bir hata oluştu");
  }
};

export const getTicketTypeByIdService = async (id) => {
  try {
    const ticketType = await getTicketTypeById(Number(id));
    if (!ticketType) {
      throw new Error("Bilet türü bulunamadı");
    }
    return ticketType;
  } catch (error) {
    throw new Error("Bilet türü alınırken bir hata oluştu");
  }
};

export const createTicketTypeService = async (data) => {
  try {
    const newTicketType = await createTicketType(data);
    return newTicketType;
  } catch (error) {
    throw new Error("Bilet türü oluşturulurken bir hata oluştu");
  }
};

export const updateTicketTypeService = async (id, data) => {
  try {
    const updatedTicketType = await updateTicketType(Number(id), data);
    return updatedTicketType;
  } catch (error) {
    throw new Error("Bilet türü güncellenirken bir hata oluştu");
  }
};

export const deleteTicketTypeService = async (id) => {
  try {
    const deletedTicketType = await deleteTicketType(Number(id));
    return deletedTicketType;
  } catch (error) {
    throw new Error("Bilet türü silinirken bir hata oluştu");
  }
};
