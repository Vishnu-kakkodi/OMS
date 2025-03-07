import { Schema, model } from 'mongoose';
import { ISellerDocument } from '../type/seller';

const sellerSchema = new Schema<ISellerDocument>(
  {
    sellername: { type: String, required: true },
  },
  { timestamps: true }
);

export const sellerSchemaModel = model<ISellerDocument>('Seller', sellerSchema);
