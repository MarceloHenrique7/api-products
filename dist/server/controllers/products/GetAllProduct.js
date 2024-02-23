"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProduct = void 0;
const database_1 = require("../../database/database");
const http_status_codes_1 = require("http-status-codes");
const getAllProduct = async (req, res) => {
    const search = req.query.search;
    try {
        if (search) {
            const videos = await (0, database_1.sql) `SELECT * FROM products WHERE name ilike ${'%' + search + '%'}`;
            res.status(http_status_codes_1.StatusCodes.OK).json(videos);
        }
        else {
            const videos = await (0, database_1.sql) `SELECT * FROM products`;
            res.status(http_status_codes_1.StatusCodes.OK).json(videos);
        }
    }
    catch (error) {
        console.log("Not was possible get registers");
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            msg: "BAD REQUESTS"
        });
    }
};
exports.getAllProduct = getAllProduct;
