import {Request, Response} from 'express';
import { IProduct } from '../../database/models';
import {StatusCodes} from 'http-status-codes'

import { sql } from '../../database/database'

export const createProduct = async (req: Request<{}, {}, IProduct>, res: Response) => {
    const {name, description, value} = req.body;

    console.log(req.body)

    if (!name || !description || !value) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Missing or invalid product data' });
    }

    try {
        await sql`INSERT INTO products (name, description, value) VALUES (${name}, ${description}, ${value})`
        res.status(StatusCodes.CREATED).json({msg: "Product created with successful"})
    } catch (error) {
        console.log("Error in create: " + error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "Internal Server Error"})
    }
}

