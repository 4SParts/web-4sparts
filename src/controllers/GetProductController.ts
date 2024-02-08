import { Request, Response } from 'express';
import GetProductService from '../services/GetProductService';


class GetProductsController {
  async handle(request: Request, response: Response) {
    const service = new GetProductService();

    const products = await service.execute();


    return response.json(products);
  }
}

export default GetProductsController;