import { Request, Response, NextFunction } from "express";
import STATUS_CODES from "../constants/statusCode";
import MESSAGES from "../constants/message";
import { IProductService } from "../interfaces/ServiceInterface/IProductService";
import mongoose from "mongoose";


export class ProductController {
    private productService: IProductService;
    constructor(productService: IProductService) { this.productService = productService }


    async createProduct(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const product = req.body;
            product.manufacture = new mongoose.Types.ObjectId(product.manufacture)
            const response = await this.productService.createProduct(product);
            if (!response) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.PRODUCT_ADDED, data: response });
        } catch (error) {
            next(error);
        }
    }

    async updateStatus(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const productId = req.params.productId;
            const { updatedId, status } = req.body
            const response = await this.productService.updateStatus(productId, status, updatedId);
            if (!response) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.STATUS_UPDATED, data: response });
        } catch (error) {
            next(error);
        }
    }

    async addProduct(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { productId, sellerId } = req.body;
            const response = await this.productService.addProduct(productId, sellerId);
            if (!response) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.PRODUCT_ADDED, data: response });
        } catch (error) {
            next(error);
        }
    }

    async faultyProduct(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const manufactureId = req.query.manufactureId as string;
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 4;
            const response = await this.productService.faultyProduct(manufactureId, page, limit);
            if (!response) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.DATA_RETRIEVED, data: response });
        } catch (error) {
            next(error);
        }
    }


    async popularProduct(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const manufactureId = req.query.manufactureId as string;
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 4;
            const sort = (req.query.sort as string);
            const response = await this.productService.popularProduct(manufactureId, page, limit, sort);
            if (!response) {
                res.json({ STATUS: STATUS_CODES.UNAUTHORIZED, MESSAGE: MESSAGES.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: STATUS_CODES.SUCCESS, message: MESSAGES.SUCCESS.DATA_RETRIEVED, data: response });
        } catch (error) {
            next(error);
        }
    }
}
