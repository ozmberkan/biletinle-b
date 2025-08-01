import { response } from "../functions/response.js";
import logger from "../logger/logger.js";
import {
  getUserByIdService,
  loginService,
  registerService,
} from "../services/user.service.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { email, password: rawPassword } = req.body;
    const user = await registerService({ email, password: rawPassword });

    const { password, ...userWithoutPassword } = user;

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    logger.info("Yeni kullanıcı başarıyla oluşturuldu.");

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

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    logger.info("Kullanıcı başarıyla giriş yaptı.");

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

    logger.info(`Kullanıcı ${id} başarıyla getirildi.`);

    response(200, true, "", userWithoutPassword, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};

export const logoutController = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    logger.info("Kullanıcı başarıyla çıkış yaptı.");

    response(200, true, "Çıkış başarılı", null, res);
  } catch (error) {
    response(500, false, error.message, null, res);
  }
};
