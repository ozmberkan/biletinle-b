import bcrypt from "bcryptjs";
import {
  getUserByEmail,
  getUserById,
  login,
  register,
} from "../repositories/user.repo.js";

export const registerService = async (data) => {
  try {
    if (!data) {
      throw new Error("Lütfen kayıt formunu doldurun.");
    }

    if (!data.email || !data.password) {
      throw new Error("Girilen bilgiler eksik, lütfen tekrar deneyin.");
    }

    const existingUser = await getUserByEmail(data.email);

    if (existingUser) {
      throw new Error("Bu e-posta adresi zaten kayıtlı.");
    }

    const model = {
      email: data.email,
      password: await bcrypt.hash(data.password, 10),
    };

    return await register(model);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginService = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error("Lütfen e-posta ve şifre girin.");
    }

    const user = await login(email);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Geçersiz şifre");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByIdService = async (id) => {
  try {
    const user = await getUserById(id);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı. Lütfen geçerli bir ID girin.");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
