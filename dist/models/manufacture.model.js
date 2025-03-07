"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufactureModel = void 0;
const mongoose_1 = require("mongoose");
const manufactureSchema = new mongoose_1.Schema({
    manufacturename: { type: String, required: true },
}, { timestamps: true });
exports.ManufactureModel = (0, mongoose_1.model)('Manufacture', manufactureSchema);
//# sourceMappingURL=manufacture.model.js.map