import { Document, Types } from "mongoose";
import { BaseInterface } from "./base.type";

export enum OrderStatus {
    Pending = "pending",
    Confirmed = "confirmed",
    Shipped = "shipped",
    Delivered = "delivered",
    Cancelled = "cancelled"
}


export interface IOrder extends BaseInterface{
    id:string;
    customer: Types.ObjectId; 
    product: Types.ObjectId[];  
    seller: Types.ObjectId; 
    quantity: number;
    totalPrice: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}

export type IOrderDocument = IOrder & Document;   