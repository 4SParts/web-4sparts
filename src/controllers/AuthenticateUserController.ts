import { Request, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { code, password } = request.body;

      const authenticateUser = new AuthenticateUserService();

      const { user, token } = await authenticateUser.execute({
        id: code,
        c_senha: password,
      });

      return response.json({ user, token });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default AuthenticateUserController;
