import { IManufactureDocument } from "../../type/manufacture";



export interface IManufactureService {
    createManufacture(manufacturename: string): Promise<IManufactureDocument>
}