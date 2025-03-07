import { Schema, model } from "mongoose";
import { IProductDocument, ProductStatus } from "../type/product";
import { ManufactureModel } from "./manufacture.model";
import { sellerSchemaModel } from "./seller.model";

const productSchema = new Schema<IProductDocument>(
    {
        manufacture: { type: Schema.Types.ObjectId, ref: ManufactureModel, required: true },
        sellers: [{ type: Schema.Types.ObjectId, ref: sellerSchemaModel, default: [] }],
        productname: { type: String, required: true },
        catname: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        status: {
            type: String,
            enum: Object.values(ProductStatus),
            default: ProductStatus.InStock
        },
        updatedBy: { type: Schema.Types.ObjectId, required: true },
        totalPurchase: { type: Number, default: 0 }

    },
    { timestamps: true }
);

export const ProductModel = model<IProductDocument>("Product", productSchema);
