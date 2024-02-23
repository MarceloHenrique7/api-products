import { sql } from '../../database/database'

import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes'


export const getAllProduct = async (req: Request<{}, {}>, res: Response) => {

        const search = req.query.search;

        try {
            if (search) {
                const videos = await sql`SELECT * FROM products WHERE name ilike ${'%' + search + '%'}`
                res.status(StatusCodes.OK).json(videos)
             } else {
                const videos = await sql`SELECT * FROM products`
                res.status(StatusCodes.OK).json(videos)
             }
        } catch (error) {
            console.log("Not was possible get registers")
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: "BAD REQUESTS"
            })
        }
        
    }

