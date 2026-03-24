import type { Request, Response } from "express";
import {context} from "../ai/context.ts";

import { getChatResponse } from "../services/geminiClient.ts";

export const handleChat = async (req: Request, res: Response) => {
  try {
    const {message} = req.body;
    const botReply = await getChatResponse(message, context);

    res.status(200).json({ reply: botReply });
  } catch (error) {
    
  }

};
