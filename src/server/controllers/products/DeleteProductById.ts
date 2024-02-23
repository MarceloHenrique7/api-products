import { sql } from "../../database/database";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { IProduct } from "../../database/models";

interface IParamsProps {
    id?: any;
}

export const DeleteProductById = async (req: Request<IParamsProps, {}, IProduct>, res: Response) => {
    const id = req.params.id;

    try {
        await sql`DELETE FROM products WHERE id=${id}`
        res.status(StatusCodes.NO_CONTENT).json({msg: "Deleted Product with successful" })
    } catch (error) {
        console.log("Error: not was possible updated the product" + error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "INTERNAL SERVER ERROR" })
    }
}