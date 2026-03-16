import { Router } from "express";

import { handleChat } from "../controllers/chat.controller.ts";

const router = Router();

router.post("/chat", handleChat);

export default router;
