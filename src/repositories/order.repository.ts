import mongoose from "mongoose";
import { BaseRepository } from "./base.repository";
import { IOrderDocument } from "../type/order.type";
import { IOrderRepository } from "../interfaces/RepositoryInterface/IOrderRepository";
import { OrderModel } from "../models/order.model";

export class OrderRepository extends BaseRepository<IOrderDocument> implements IOrderRepository {
    constructor() {
        super(OrderModel);
    }

    async allOrders(): Promise<IOrderDocument[] | null> {
        try {
            const response = await this.model.find()
                .populate([{
                    path: 'customer',
                }, {
                    path: 'seller',
                },
                {
                    path: 'product',
                    select: 'productname price manufacture',
                    populate: {
                        path: 'manufacture',
                    }
                }
                ])

            return response;
        } catch (error) {
            console.error(error, "Error occurred");
            throw new Error("An error occurred while fetching the document.");
        }
    }

    async revenue(manufactureId: string): Promise<any> {
        try {
            const id = new mongoose.Types.ObjectId(manufactureId);
            const response = await OrderModel.aggregate([
                {
                    $match: { manufacture: id }
                },
                {
                    $group: {
                        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
                        totalOrders: { $sum: 1 },
                        totalRevenue: { $sum: "$totalPrice" }
                    }
                },
                {
                    $sort: { "_id.year": 1, "_id.month": 1 }
                },
                {
                    $project: {
                        _id: 0,
                        year: "$_id.year",
                        month: "$_id.month",
                        totalOrders: 1,
                        totalRevenue: 1
                    }
                }
            ]);

            console.log(response)
            return response
        } catch (error) {
            console.error(error, "Error occurred");
            throw new Error("An error occurred while fetching the revenue.");
        }
    }
}