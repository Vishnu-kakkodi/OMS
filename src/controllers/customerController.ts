import { Request, Response, NextFunction } from "express";
import STATUS_CODES from "../constants/statusCode";
import MESSAGES from "../constants/message";
import { ICustomerService } from "../interfaces/ServiceInterface/ICustomerService";


export class CustomerController {
    private customerService: ICustomerService;
    constructor(customerService: ICustomerService) { this.customerService = customerService }

    async createCustomer(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { customername } = req.body;
            const seller = await this.customerService.createCustomer(customername);
            if (!seller) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.LOGIN_SUCCESS, data: seller });
        } catch (error) {
            next(error);
        }
    }

}
