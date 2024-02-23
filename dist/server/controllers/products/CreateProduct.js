"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const http_status_codes_1 = require("http-status-codes");
const database_1 = require("../../database/database");
const createProduct = async (req, res) => {
    const { name, description, value } = req.body;
    console.log(req.body);
    if (!name || !description || !value) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ msg: 'Missing or invalid product data' });
    }
    try {
        await (0, database_1.sql) `INSERT INTO products (name, description, value) VALUES (${name}, ${description}, ${value})`;
        res.status(http_status_codes_1.StatusCodes.CREATED).json({ msg: "Product created with successful" });
    }
    catch (error) {
        console.log("Error in create: " + error);
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Internal Server Error" });
    }
};
exports.createProduct = createProduct;
