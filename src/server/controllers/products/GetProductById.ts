import { sql } from '../../database/database'

import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes'


interface IParamsProps {
    id?: any;
}

export const GetProductById = async (req: Request<IParamsProps>, res: Response) => {

        const id = req.params.id;
        try {
            const row = await sql`SELECT * FROM products WHERE id=${id}`
            res.status(StatusCodes.OK).json(row)
        }
        catch (error) {
            console.log("Not was possible get registers")
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: "BAD REQUESTS"
            })
        }
}
