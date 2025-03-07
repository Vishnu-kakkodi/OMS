
import { IProductService } from "../interfaces/ServiceInterface/IProductService";
import { IProductDocument, ProductStatus } from "../type/product";
import { IProductRepository } from "../interfaces/RepositoryInterface/IProductRepository";
import mongoose from "mongoose";



class ProductService implements IProductService {
    private readonly productRepository: IProductRepository

    constructor(productRepository: IProductRepository) {
        this.productRepository = productRepository;
    }

    async createProduct(product: IProductDocument): Promise<IProductDocument> {
        try {
            product.updatedBy = product.manufacture;
            const response = await this.productRepository.create(product);
            return response
        } catch (error) {
            throw error
        }
    }

    async addProduct(productId: string, sellerId: string): Promise<IProductDocument | null> {
        try {
            const response = await this.productRepository.findByIdAndUpdate(productId, sellerId);
            return response
        } catch (error) {
            throw error
        }
    }


    async updateStatus(productId: string, status: ProductStatus, updatedId: string): Promise<IProductDocument | null> {
        try {
            console.log(productId, status, updatedId);

            const updatedID = new mongoose.Types.ObjectId(updatedId)
            const response = await this.productRepository.updateById(productId);
            if (response) {
                response.status = status;
                response.updatedBy = updatedID;
                await response?.save();
            }
            return response;
        } catch (error) {
            throw error;
        }
    }

    async faultyProduct(manufactureId: string, page: number, limit: number): Promise<{ faultyItems: IProductDocument[], total: number }> {
        try {
            const skip = (page - 1) * limit;
            const { faultyItems, total } = await this.productRepository.find(manufactureId, skip, limit);
            return { faultyItems, total }
        } catch (error) {
            throw error;
        }
    }


    async popularProduct(manufactureId: string, page: number, limit: number, sort: string): Promise<{ product: IProductDocument[], total: number }> {
        try {
            const skip = (page - 1) * limit;
            let sortOptions: Record<string, 1 | -1> = {};

            switch (sort) {
                case 'dsc':
                    sortOptions = { totalPurchase: -1 };
                    break;
                case 'asc':
                    sortOptions = { totalPurchase: 1 };
                    break;
                default:
                    sortOptions = { totalPurchase: -1 };
            }

            const { product, total } = await this.productRepository.findProduct(manufactureId, skip, limit, sortOptions);
            return { product, total }
        } catch (error) {
            throw error;
        }
    }

}

export default ProductService;