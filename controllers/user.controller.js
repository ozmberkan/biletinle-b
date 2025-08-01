import { response } from "../functions/response.js";
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

    response(
      201,
      true,
      "Kullanıcı başarıyla oluşturuldu",
      userWithoutPassword,
      res
    );
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password: rawPassword } = req.body;
    const user = await loginService(email, rawPassword);

    const { password, ...userWithoutPassword } = user;

    response(200, true, "Giriş başarılı", userWithoutPassword, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(Number(id));

    const { password, ...userWithoutPassword } = user;

    response(200, true, "", userWithoutPassword, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};
