import { Request, Response, NextFunction } from "express";
import STATUS_CODES from "../constants/statusCode";
import MESSAGES from "../constants/message";
import { IManufactureService } from "../interfaces/ServiceInterface/IManufactureService";


export class ManufactureController {
    private manufactureService: IManufactureService;
    constructor(manufactureService: IManufactureService) { this.manufactureService = manufactureService }

    async createManufacture(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { manufacturename } = req.body;
            const manufacture = await this.manufactureService.createManufacture(manufacturename);
            if (!manufacture) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.LOGIN_SUCCESS, data: manufacture });
        } catch (error) {
            next(error);
        }
    }

}
