import { GoogleGenAI } from "@google/genai";
import { PROJECTS, TECHNOLOGIES, SERVICES } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Construct a context string from our static data
const getSystemPrompt = () => {
  return `You are the AI Assistant for GreenCrude Energy, a renewable energy company.
  Your tone is professional, corporate, and knowledgeable about sustainable technology.
  
  Here is the company data you can reference:
  
  PROJECTS:
  ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, location: p.location, desc: p.description })))}
  
  TECHNOLOGIES:
  ${JSON.stringify(TECHNOLOGIES.map(t => ({ title: t.title, desc: t.description })))}
  
  SERVICES:
  ${JSON.stringify(SERVICES.map(s => ({ title: s.title, desc: s.description })))}
  
  Answer questions about GreenCrude Energy concisely. If the user asks about something not in this data, strictly say you can only provide information about GreenCrude Energy's official activities.
  Do not invent new projects.
  `;
};

export const chatWithGemini = async (userMessage: string): Promise<string> => {
  try {
    if (!API_KEY) {
      console.warn("No API Key found. Simulating response.");
      return "I apologize, but I am currently offline (API Key missing). Please contact our support team directly.";
    }

    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: getSystemPrompt(),
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while processing your request. Please try again later.";
  }
};
