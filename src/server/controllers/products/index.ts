import * as createProduct from './CreateProduct'
import * as getProduct from './GetAllProduct'
import * as GetProductById from './GetProductById'
import * as UpdateProductById from './UpdateProductById'
import * as DeleteProductById from './DeleteProductById'


export const ProductController = {
    ...getProduct,
    ...createProduct,
    ...GetProductById,
    ...UpdateProductById,
    ...DeleteProductById,
}