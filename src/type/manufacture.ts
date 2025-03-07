import { Document, Types } from "mongoose";


export interface BaseInterface{
    _is: string;
    createdAt :Date;
    updatedAt : Date;
}


export interface IManufacture extends BaseInterface{
    id:string;
    manufacturename: string;
}

export type IManufactureDocument = IManufacture & Document;   