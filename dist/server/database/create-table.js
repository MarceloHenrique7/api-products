"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
const database_1 = require("./database");
exports.createTable = (async () => {
    await (0, database_1.sql) `CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY ,
        name TEXT,
        description TEXT,
        value REAL
    )`;
});
