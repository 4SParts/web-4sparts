import { Router } from "express";

import productRoutes from "./product.routes";
import sessionsRouter from "./sessions.routes";


const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/produtos", productRoutes);



export default routes;
