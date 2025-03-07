"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufactureRepository = void 0;
const manufacture_model_js_1 = require("../models/manufacture.model.js");
const base_repository_js_1 = require("./base.repository.js");
class ManufactureRepository extends base_repository_js_1.BaseRepository {
    constructor() {
        super(manufacture_model_js_1.ManufactureModel);
    }
}
exports.ManufactureRepository = ManufactureRepository;
//# sourceMappingURL=manufacture.repository.js.map