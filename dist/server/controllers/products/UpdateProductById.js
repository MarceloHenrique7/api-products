"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductById = void 0;
const database_1 = require("../../database/database");
const http_status_codes_1 = require("http-status-codes");
const UpdateProductById = async (req, res) => {
    const id = req.params.id;
    const { name, description, value } = req.body;
    try {
        await (0, database_1.sql) `UPDATE products SET name=${name}, description=${description}, value=${value} WHERE id=${id}`;
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json({ msg: "Updated Product with successful" });
    }
    catch (error) {
        console.log("Error: not was possible updated the product" + error);
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "INTERNAL SERVER ERROR" });
    }
};
exports.UpdateProductById = UpdateProductById;
