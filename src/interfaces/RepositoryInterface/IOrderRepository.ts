import { IBaseRepository } from "./IBaseRepository";
import { IOrderDocument } from "../../type/order.type";


export interface IOrderRepository extends IBaseRepository<IOrderDocument> {
    allOrders(): Promise<IOrderDocument[] | null>;
    revenue(manufactureId: string): Promise<any>
}