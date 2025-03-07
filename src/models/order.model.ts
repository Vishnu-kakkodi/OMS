import { Schema, model } from "mongoose";
import { IOrderDocument, OrderStatus } from "../type/order.type";
import { customerSchemaModel } from "./customer.model";
import { sellerSchemaModel } from "./seller.model";
import { ProductModel } from "./product.model";





const OrderSchema = new Schema<IOrderDocument>(
    {
        customer: { type: Schema.Types.ObjectId, ref: customerSchemaModel, required: true },
        product: [{ type: Schema.Types.ObjectId, ref: ProductModel, required: true }],
        seller: { type: Schema.Types.ObjectId, ref: sellerSchemaModel, required: true },
        quantity: { type: Number, required: true, min: 1 },
        totalPrice: { type: Number, required: true, min: 0 },
        status: {
            type: String,
            enum: Object.values(OrderStatus),
            default: OrderStatus.Pending
        }
    },
    { timestamps: true }
);

export const OrderModel = model<IOrderDocument>("Order", OrderSchema);
