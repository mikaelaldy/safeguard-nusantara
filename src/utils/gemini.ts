
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Generative AI API
// You should replace this with your actual API key or use environment variables
const API_KEY = "AIzaSyBjTaijw-TPw1CVxTHHK5KGL--dDPps8Wk";
const genAI = new GoogleGenerativeAI(API_KEY);

interface ScamAnalysisResult {
  safetyLevel: 'aman' | 'mencurigakan' | 'berbahaya';
  explanation: string;
}

export async function analyzeText(text: string): Promise<ScamAnalysisResult> {
  try {
    // For safety, trim and limit input length
    const trimmedText = text.trim().slice(0, 1000);
    
    // Get the text generation model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    // Craft the prompt for scam detection
    const prompt = `
    Analisis apakah teks berikut ini berpotensi sebagai penipuan/scam atau aman:
    
    "${trimmedText}"
    
    Berikan jawaban dalam format JSON dengan struktur sebagai berikut:
    {
      "safetyLevel": "[aman/mencurigakan/berbahaya]",
      "explanation": "[penjelasan singkat dalam Bahasa Indonesia mengapa teks tersebut diklasifikasikan demikian]"
    }
    
    Panduan klasifikasi:
    - "aman": Tidak ada indikasi penipuan atau konten berbahaya
    - "mencurigakan": Ada beberapa pola mencurigakan tetapi tidak jelas apakah penipuan
    - "berbahaya": Kemungkinan besar merupakan penipuan atau konten berbahaya
    
    Berikan HANYA output JSON tanpa teks lainnya.
    `;
    
    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const textResponse = response.text();
    
    // Parse the JSON response
    try {
      // Extract JSON if it's wrapped in other text or code blocks
      const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? jsonMatch[0] : textResponse;
      const parsedResponse = JSON.parse(jsonStr);
      
      // Validate the response structure
      if (!parsedResponse.safetyLevel || !parsedResponse.explanation) {
        console.error("Invalid response structure from Gemini API:", parsedResponse);
        throw new Error("Invalid API response structure");
      }
      
      return {
        safetyLevel: parsedResponse.safetyLevel as 'aman' | 'mencurigakan' | 'berbahaya',
        explanation: parsedResponse.explanation
      };
    } catch (parseError) {
      console.error("Failed to parse Gemini API response:", parseError, textResponse);
      // Fallback if parsing fails
      return {
        safetyLevel: 'mencurigakan',
        explanation: 'Tidak dapat menganalisis teks. Harap berhati-hati dan periksa kembali.'
      };
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}
