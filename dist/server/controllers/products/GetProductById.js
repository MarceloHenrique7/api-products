"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductById = void 0;
const database_1 = require("../../database/database");
const http_status_codes_1 = require("http-status-codes");
const GetProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const row = await (0, database_1.sql) `SELECT * FROM products WHERE id=${id}`;
        res.status(http_status_codes_1.StatusCodes.OK).json(row);
    }
    catch (error) {
        console.log("Not was possible get registers");
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            msg: "BAD REQUESTS"
        });
    }
};
exports.GetProductById = GetProductById;
