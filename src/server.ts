import express from "express";
import dotenv from "dotenv";
import customerRoute from "./routes/customerRoutes";
import manufactureRoute from "./routes/manufactureRoute";
import { connectDB } from "./config/connectDB";
import sellerRoute from "./routes/sellerRoute";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/manufacture", manufactureRoute);
app.use("/seller", sellerRoute);
app.use("/customer", customerRoute);

const PORT = process.env.PORT || 6000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });
