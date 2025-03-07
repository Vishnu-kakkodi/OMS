import { ManufactureModel } from "../models/manufacture.model";
import { IManufactureDocument } from "../type/manufacture";
import { BaseRepository } from "./base.repository";

export class ManufactureRepository extends BaseRepository<IManufactureDocument> {
    constructor() {
        super(ManufactureModel);
    }

}