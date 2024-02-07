import { getRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";


import Area from "../entities/Area";

interface Request {
  id: number;
  c_senha: string;
}

interface IResponse {
  user: Area;
  token: string;
}

class AuthenticateUserService {
  public async execute({ id, c_senha }: Request): Promise<IResponse> {
    const usersRepository = getRepository(Area);

    await usersRepository.query(
      `select criaparametro()`
    )

    const user = await usersRepository.findOne({ where: { i_cdarea: id } });

    if (!user) {
      throw new Error("Incorrect cnpj/password combination.");
    }

    // const passwordMatched = await compare(c_senha, user.c_senha);

    const passwordMatched = (await c_senha) === user.c_senha;

    if (!passwordMatched) {
      throw new Error("Incorrect vende/password combination.");
    }

    /*     if (user?.f_situacao === "I") {
      throw new Error("user is inactive.");
    } */

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.c_nome,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
