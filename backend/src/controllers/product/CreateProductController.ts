import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;
        let categoryId = Number.parseInt(category_id)

        if (!req.file) {
            throw new Error("Imagem obrigatoria.")
        } else {
            const { originalname, filename: banner } = req.file;
            
            const createProductService = new CreateProductService();
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id: categoryId
            });

            return res.json(product);
        }
    }
}

export { CreateProductController }