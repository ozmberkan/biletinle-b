import {
  createEventTypeService,
  getAllEventTypesService,
  getEventTypeByIdService,
  deleteEventTypeService,
  updateEventTypeService,
} from "../services/eventType.service.js";

export const getAllEventTypesController = async (req, res) => {
  try {
    const eventTypes = await getAllEventTypesService();
    res.status(200).json({ success: true, message: "", data: eventTypes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getEventTypeByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const eventType = await getEventTypeByIdService(id);
    res.status(200).json({ success: true, message: "", data: eventType });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const createEventTypeController = async (req, res) => {
  const data = req.body;
  try {
    const newEventType = await createEventTypeService(data);
    res.status(201).json({
      success: true,
      message: "Etkinlik türü başarıyla oluşturuldu",
      data: newEventType,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateEventTypeController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedEventType = await updateEventTypeService(id, data);
    res.status(200).json({
      success: true,
      message: "Etkinlik türü başarıyla güncellendi",
      data: updatedEventType,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteEventTypeController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteEventTypeService(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
