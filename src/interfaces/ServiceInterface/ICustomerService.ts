import { ICustomerDocument } from "../../type/customer";

export interface ICustomerService {
    createCustomer(customername: string): Promise<ICustomerDocument>
}
