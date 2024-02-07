import { Request, Response } from 'express';
import GetProdutoService from '../services/GetProdutoService';


class GetProdutosController {
  async handle(request: Request, response: Response) {
    const service = new GetProdutoService();

    const products = await service.execute();


    return response.json(products);
  }
}

export default GetProdutosController;