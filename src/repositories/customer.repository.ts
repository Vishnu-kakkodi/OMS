import { customerSchemaModel } from "../models/customer.model";
import { ICustomerDocument } from "../type/customer";
import { BaseRepository } from "./base.repository";

export class CustomerRepository extends BaseRepository<ICustomerDocument> {
    constructor() {
        super(customerSchemaModel);
    }
}