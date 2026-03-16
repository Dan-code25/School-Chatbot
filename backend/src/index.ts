import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import type { Request, Response } from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  res.send("Server running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
