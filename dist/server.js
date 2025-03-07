"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import customerRoute from "./routes/customerRoutes";
const manufactureRoute_js_1 = __importDefault(require("./routes/manufactureRoute.js"));
const mongoose_1 = __importDefault(require("mongoose"));
// import sellerRoute from "./routes/sellerRoute";
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/manufacture", manufactureRoute_js_1.default);
// app.use("/api/seller", sellerRoute);
// app.use("/api/customer", customerRoute);
app.get("/", (req, res) => {
    res.send("Order Management System API is Running...");
});
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/order-management-system')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error('MongoDB connection:', err));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}...`);
});
//# sourceMappingURL=server.js.map