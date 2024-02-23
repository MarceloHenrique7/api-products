import { Router } from "express"
import { ProductController } from "../controllers"

const router = Router();


router.get('/products', ProductController.getAllProduct)
router.post('/products',  ProductController.createProduct)
router.get('/products/:id',  ProductController.GetProductById)
router.put('/products/:id',  ProductController.UpdateProductById)
router.delete('/products/:id',  ProductController.DeleteProductById)

export { router };