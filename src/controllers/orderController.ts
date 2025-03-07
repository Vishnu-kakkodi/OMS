import { Request, Response, NextFunction } from "express";
import STATUS_CODES from "../constants/statusCode";
import MESSAGES from "../constants/message";
import { IOrderService } from "../interfaces/ServiceInterface/IOrderService";


export class OrderController {
    private orderService: IOrderService;
    constructor(orderService: IOrderService) { this.orderService = orderService }


    async createOrder(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const orderDetails = req.body;
            const response = await this.orderService.createOrder(orderDetails);
            if (!response) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.ORDER_CREATED, data: response });
        } catch (error) {
            next(error);
        }
    }

    async allOrders(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const response = await this.orderService.allOrders();
            if (!response) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.DATA_RETRIEVED, data: response });
        } catch (error) {
            next(error);
        }
    }

    async revenue(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const manufactureId = req.query.manufactureId as string;
            const response = await this.orderService.revenue(manufactureId);
            if (!response) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.DATA_RETRIEVED, data: response });
        } catch (error) {
            next(error);
        }
    }

}
