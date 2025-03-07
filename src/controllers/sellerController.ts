import { Request, Response, NextFunction } from "express";
import STATUS_CODES from "../constants/statusCode";
import MESSAGES from "../constants/message";
import { ISellerService } from "../interfaces/ServiceInterface/ISellerService";


export class SellerController {
    private sellerService: ISellerService;
    constructor(sellerService: ISellerService) { this.sellerService = sellerService }

    async createSeller(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { sellername } = req.body;
            const seller = await this.sellerService.createSeller(sellername);
            if (!seller) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.LOGIN_SUCCESS, data: seller });
        } catch (error) {
            next(error);
        }
    }

}
