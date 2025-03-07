import { Model, Document } from "mongoose";
import { BaseInterface } from "../type/base.type";
import { IBaseRepository } from "../interfaces/RepositoryInterface/IBaseRepository";

export abstract class BaseRepository<T extends BaseInterface & Document> implements IBaseRepository<T> {
    constructor(protected readonly model: Model<T & Document>) { }

    async create(data: Partial<T>): Promise<T> {
        console.log("Repos")
        try {
            const item = await this.model.create(data);
            return item.toObject();
        } catch (error: any) {
            console.error(error, "Error occurred during creation");
            if (error.name === "ValidationError") {
                throw new Error("Validation failed for the provided data.");
            }
            throw new Error("An unexpected error occurred during creation.");
        }
    }

}
