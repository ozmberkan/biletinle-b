import {
  getUserByIdService,
  loginService,
  registerService,
} from "../services/user.service.js";

export const registerController = async (req, res) => {
  try {
    const { email, password: rawPassword } = req.body;
    const user = await registerService({ email, password: rawPassword });

    const { password, ...userWithoutPassword } = user;

    return res.status(201).json({
      success: true,
      message: "",
      data: userWithoutPassword,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password: rawPassword } = req.body;
    const user = await loginService(email, rawPassword);

    const { password, ...userWithoutPassword } = user;

    return res.status(200).json({
      success: true,
      message: "",
      data: userWithoutPassword,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(Number(id));

    const { password, ...userWithoutPassword } = user;

    return res.status(200).json({
      success: true,
      message: "",
      data: userWithoutPassword,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
