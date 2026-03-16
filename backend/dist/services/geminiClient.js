import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
export async function getChatResponse(userMessage) {
    try {
        const result = await ai.models.generateContent({
            model: "gemini-3-flash",
            contents: [{ role: "user", parts: [{ text: userMessage }] }],
            config: {
                systemInstruction: "You are a Holy Nazarene Christian School Assistant",
                temperature: 0.1,
            },
        });
        console.log("RESULT: ", result);
        return result;
    }
    catch (error) {
        console.error("Gemini API Error", error);
    }
}
//# sourceMappingURL=geminiClient.js.map