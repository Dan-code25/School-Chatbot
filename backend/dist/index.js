import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api", chatRoutes);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
