import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
export async function getChatResponse(userMessage, context) {
    try {
        const result = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite-preview",
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: `[CONTEXT]: ${context} [USER MESSAGE]: ${userMessage}` },
                    ],
                },
            ],
            config: {
                systemInstruction: "You are a School Assistant.",
                temperature: 0.6,
            },
        });
        console.log("RESULT: ", result);
        return result.text;
    }
    catch (error) {
        console.error("Gemini API Error", error);
    }
}
