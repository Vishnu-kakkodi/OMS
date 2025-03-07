import { Schema, model } from 'mongoose';
import { IManufactureDocument } from '../type/manufacture';

const manufactureSchema = new Schema<IManufactureDocument>(
  {
    manufacturename: { type: String, required: true },
  },
  { timestamps: true }
);

export const ManufactureModel = model<IManufactureDocument>('Manufacture', manufactureSchema);
