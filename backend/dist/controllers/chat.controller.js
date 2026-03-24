import { context } from "../ai/context.js";
import { getChatResponse } from "../services/geminiClient.js";
export const handleChat = async (req, res) => {
    try {
        const { message } = req.body;
        const botReply = await getChatResponse(message, context);
        res.status(200).json({ reply: botReply });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
