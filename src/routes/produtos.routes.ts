import { Router } from "express";

import GetProdutosController from "../controllers/GetProdutosController";

const produtosRouter = Router();

produtosRouter.get(
  "/",
  new GetProdutosController().handle
);

export default produtosRouter;
