import { Document } from "mongoose";


export interface BaseInterface{
    _is: string;
    createdAt :Date;
    updatedAt : Date;
}


export interface ICustomer extends BaseInterface{
    id:string;
    customername: string;
}

export type ICustomerDocument = ICustomer & Document;   