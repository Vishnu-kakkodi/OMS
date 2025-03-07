"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const item = await this.model.create(data);
            return item.toObject();
        }
        catch (error) {
            console.error(error, "Error occurred during creation");
            if (error.name === "ValidationError") {
                throw new Error("Validation failed for the provided data.");
            }
            throw new Error("An unexpected error occurred during creation.");
        }
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map