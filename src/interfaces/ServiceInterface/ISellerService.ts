import { ISellerDocument } from "../../type/seller";

export interface ISellerService {

    createSeller(sellername: string): Promise<ISellerDocument>
}
