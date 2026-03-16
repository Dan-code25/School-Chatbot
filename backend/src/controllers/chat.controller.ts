import type { Request, Response } from "express";
import {context} from "../ai/context.ts";

import { getChatResponse } from "../services/geminiClient.ts";

export const handleChat = async (req: Request, res: Response) => {
  try {
    const {message} = req.body;
    const response = await getChatResponse(message, context);

    res.send(response);
  } catch (error) {
    
  }

};
