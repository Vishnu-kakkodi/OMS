import { IBaseRepository } from "./IBaseRepository";
import { IProductDocument } from "../../type/product";


export interface IProductRepository extends IBaseRepository<IProductDocument> {
    findByIdAndUpdate(productId: string, sellerId: string): Promise<IProductDocument | null>
    updateById(_id: string): Promise<IProductDocument | null>
    find(manufactureId: string, skip: number, limit: number): Promise<
        { faultyItems: IProductDocument[]; total: number; }>
    findProduct(manufactureId: string, skip: number, limit: number, sortOptions: any): Promise<
        { product: IProductDocument[]; total: number; }>
    findOne(productId: string): Promise<IProductDocument | null>
}