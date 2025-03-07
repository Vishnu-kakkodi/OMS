import { Types } from "mongoose";
import { IProductDocument, ProductStatus } from "../../type/product";



export interface IProductService {
    createProduct(product: IProductDocument): Promise<IProductDocument>
    updateStatus(productId: string, status: ProductStatus, updatedId: string): Promise<IProductDocument | null>
    addProduct(productId: string, sellerId: string): Promise<IProductDocument | null>
    faultyProduct(manufactureId: string, page: number, limit: number): Promise<{ faultyItems: IProductDocument[], total: number }>
    popularProduct(manufactureId: string, page: number, limit: number, sort: string): Promise<{ product: IProductDocument[], total: number }>


}