import { Request, Response } from 'express';
import GetOneProductService from '../services/GetOneProductService';


class GetOneProductController {
  async handle(request: Request, response: Response) {
    const service = new GetOneProductService();

    const id = request.params.id.toUpperCase()

    const products = await service.execute({
      id: String(id),
    });

    return response.json(products);
  }
}

export default GetOneProductController;