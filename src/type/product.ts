import { Document, Types } from "mongoose";

export interface BaseInterface {
    _is: string;  
    createdAt: Date;
    updatedAt: Date;
}

export enum ProductStatus {
    InStock = "instock",
    OutOfStock = "outofstock",
    Faulty = "faulty"
}


export interface IProduct extends BaseInterface {
    manufacture: Types.ObjectId;
    sellers: Types.ObjectId[];
    productname: string;
    catname: string;
    description: string;
    price: number;
    stock: number;
    status: ProductStatus;
    totalPurchase: number;
    is_active: number;
    updatedBy: Types.ObjectId;
}

export type IProductDocument = IProduct & Document;
