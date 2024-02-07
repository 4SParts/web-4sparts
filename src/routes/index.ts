import { Router } from "express";

import produtosRouter from "./produtos.routes";
import sessionsRouter from "./sessions.routes";


const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/produtos", produtosRouter);



export default routes;
