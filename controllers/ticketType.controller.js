import {
  getAllTicketTypesService,
  getTicketTypeByIdService,
  createTicketTypeService,
  deleteTicketTypeService,
  updateTicketTypeService,
} from "../services/ticketType.service.js";

export const getAllTicketTypesController = async (req, res) => {
  try {
    const ticketTypes = await getAllTicketTypesService();
    res.status(200).json({ success: true, message: "", data: ticketTypes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTicketTypeByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const ticketType = await getTicketTypeByIdService(id);
    res.status(200).json({ success: true, message: "", data: ticketType });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const createTicketTypeController = async (req, res) => {
  const data = req.body;
  try {
    const newTicketType = await createTicketTypeService(data);
    res.status(201).json({
      success: true,
      message: "Bilet türü başarıyla oluşturuldu",
      data: newTicketType,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTicketTypeController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedTicketType = await updateTicketTypeService(id, data);
    res.status(200).json({
      success: true,
      message: "Bilet türü başarıyla güncellendi",
      data: updatedTicketType,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTicketTypeController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTicketTypeService(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
