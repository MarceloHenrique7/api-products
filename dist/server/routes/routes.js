"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/products', controllers_1.ProductController.getAllProduct);
router.post('/products', controllers_1.ProductController.createProduct);
router.get('/products/:id', controllers_1.ProductController.GetProductById);
router.put('/products/:id', controllers_1.ProductController.UpdateProductById);
router.delete('/products/:id', controllers_1.ProductController.DeleteProductById);
