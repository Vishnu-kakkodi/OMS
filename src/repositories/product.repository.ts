import mongoose from "mongoose";
import { ProductModel } from "../models/product.model";
import { IProductDocument, ProductStatus } from "../type/product";
import { BaseRepository } from "./base.repository";
import { IProductRepository } from "../interfaces/RepositoryInterface/IProductRepository";

export class ProductRepository extends BaseRepository<IProductDocument> implements IProductRepository {
    constructor() {
        super(ProductModel);
    }

    async findByIdAndUpdate(productId: string, sellerId: string): Promise<IProductDocument | null> {
        try {
            const ProductId = new mongoose.Types.ObjectId(productId);
            const sellerID = new mongoose.Types.ObjectId(sellerId);
            const response = await this.model.findByIdAndUpdate(
                productId,
                { $addToSet: { sellers: sellerID } },
                { new: true, runValidators: true }
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async updateById(_id: string): Promise<IProductDocument | null> {
        try {
            const productId = new mongoose.Types.ObjectId(_id);
            const product = await this.model.findById(productId);
            return product;
        } catch (error) {
            console.error(error, "Error occurred during update");
            throw new Error("An error occurred while updating the document.");
        }
    }

    async find(manufactureId: string, skip: number, limit: number): Promise<
        { faultyItems: IProductDocument[]; total: number; }> {
        try {
            const manufactureID = new mongoose.Types.ObjectId(manufactureId)
            const faultyItems = await this.model.find({ manufacture: manufactureID, status: ProductStatus.Faulty }, { _id: 0, productname: 1 })
                .skip(skip)
                .limit(limit)
                .populate({
                    path: 'updatedBy',
                });

            const total: number = await this.model.countDocuments({ manufacture: manufactureID });
            return { faultyItems, total }
        } catch (error) {
            console.error(error, "Error occurred");
            throw new Error("An error occurred while fetching the document.");
        }
    }

    async findProduct(manufactureId: string, skip: number, limit: number, sortOptions: any = { totalPurchase: -1 }): Promise<
        { product: IProductDocument[]; total: number; }> {
        try {
            const manufactureID = new mongoose.Types.ObjectId(manufactureId)
            const product = await this.model.find({ manufacture: manufactureID })
                .sort(sortOptions)
                .skip(skip)
                .limit(limit)
                .populate([{
                    path: 'manufacture',
                }, {
                    path: 'sellers'
                }
                ]);

            const total: number = await this.model.countDocuments({ manufacture: manufactureID });
            return { product, total };

        } catch (error) {
            console.error(error, "Error occurred");
            throw new Error("An error occurred while fetching the document.");
        }
    }

    async findOne(productId: string): Promise<IProductDocument | null> {
        try {
            const productID = new mongoose.Types.ObjectId(productId)
            return await this.model.findById(productID)
        } catch (error) {
            console.error(error, "Error occurred");
            throw new Error("An error occurred while fetching the document.");
        }
    }

}