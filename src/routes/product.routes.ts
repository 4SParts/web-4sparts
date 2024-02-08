import { Router } from "express";

import GetProductController from "../controllers/GetProductController";
import GetOneProductController from "../controllers/GetOneProdutoController";

const productRouter = Router();

productRouter.get(
  "/",
  new GetProductController().handle
);

productRouter.get(
  "/:id",
  new GetOneProductController().handle
);


export default productRouter;
