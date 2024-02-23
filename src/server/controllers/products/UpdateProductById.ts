import { sql } from "../../database/database";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { IProduct } from "../../database/models";

interface IParamsProps {
    id?: any;
}

export const UpdateProductById = async (req: Request<IParamsProps, {}, IProduct>, res: Response) => {

    const id = req.params.id;
    const {name, description, value} = req.body;

    try {
        await sql`UPDATE products SET name=${name}, description=${description}, value=${value} WHERE id=${id}`
        res.status(StatusCodes.NO_CONTENT).json({msg: "Updated Product with successful" })
    } catch (error) {
        console.log("Error: not was possible updated the product" + error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "INTERNAL SERVER ERROR" })
    }

}