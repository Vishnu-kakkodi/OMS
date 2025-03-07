"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const manufacture_repository_js_1 = require("../repositories/manufacture.repository.js");
const manufacture_service_js_1 = __importDefault(require("../services/manufacture.service.js"));
const manufactureController_js_1 = require("../controllers/manufactureController.js");
const router = (0, express_1.Router)();
const manufactureRepository = new manufacture_repository_js_1.ManufactureRepository();
const manufactureService = new manufacture_service_js_1.default(manufactureRepository);
const manufactureController = new manufactureController_js_1.ManufactureController(manufactureService);
router.post('/manufacture', manufactureController.createManufacture.bind(manufactureController));
exports.default = router;
//# sourceMappingURL=manufactureRoute.js.map