import { Schema, model } from 'mongoose';
import { ICustomerDocument } from '../type/customer';

const customerSchema = new Schema<ICustomerDocument>(
  {
    customername: { type: String, required: true },
  },
  { timestamps: true }
);

export const customerSchemaModel = model<ICustomerDocument>('Customer', customerSchema);
