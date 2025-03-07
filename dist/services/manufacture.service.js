"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ManufactureService {
    constructor(manufactureRepository) {
        this.manufactureRepository = manufactureRepository;
    }
    async createManufacture(manufacturename) {
        try {
            const manufacture = await this.manufactureRepository.create({ manufacturename });
            return manufacture;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = ManufactureService;
//# sourceMappingURL=manufacture.service.js.map