import { sellerSchemaModel } from "../models/seller.model";
import { ISellerDocument } from "../type/seller";
import { BaseRepository } from "./base.repository";

export class SellerRepository extends BaseRepository<ISellerDocument> {
    constructor() {
        super(sellerSchemaModel);
    }

}