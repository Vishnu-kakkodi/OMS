import { Document, Types } from "mongoose";


export interface BaseInterface{
    _is: string;
    createdAt :Date;
    updatedAt : Date;
}


export interface ISeller extends BaseInterface{
    id:string;
    sellername: string;
}

export type ISellerDocument = ISeller & Document;   