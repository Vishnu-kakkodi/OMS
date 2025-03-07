"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufactureController = void 0;
const statusCode_js_1 = __importDefault(require("../constants/statusCode.js"));
const message_js_1 = __importDefault(require("../constants/message.js"));
class ManufactureController {
    constructor(manufactureService) { this.manufactureService = manufactureService; }
    async createManufacture(req, res, next) {
        try {
            const { manufacturename } = req.body;
            const manufacture = await this.manufactureService.createManufacture(manufacturename);
            if (!manufacture) {
                res.json({ STATUS: statusCode_js_1.default.UNAUTHORIZED, MESSAGE: message_js_1.default.ERROR.UNAUTHORIZED });
            }
            res.status(200).json({ status: statusCode_js_1.default.SUCCESS, message: message_js_1.default.SUCCESS.LOGIN_SUCCESS, data: manufacture });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ManufactureController = ManufactureController;
//# sourceMappingURL=manufactureController.js.map