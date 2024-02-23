import { sql } from "./database";



export const createTable = ( async () => {
    await sql`CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY ,
        name TEXT,
        description TEXT,
        value REAL
    )`;
}) 
