import { IOrderDocument } from "../../type/order.type";

export interface IOrderService {
    createOrder(orderDetails: IOrderDocument): Promise<IOrderDocument>
    allOrders(): Promise<IOrderDocument[] | null>
    revenue(manufactureId: string): Promise<any>
}