import { GoogleGenerativeAI } from "@google/generative-ai";

// Mock Replies
const mockReplies = [
    "ဟယ်လို! ကျွန်တော် သင့် AI စကားပြောသူပါ။ 💕",
    "ဒီနေ့ ဘယ်လိုနေလဲ? ပျော်နေမယ်ထင်တယ်။",
    "ဆက်ပြောပါဦး၊ ကျွန်တော် နားထောင်နေတယ်။ ✨",
    "စိတ်ဝင်စားစရာကောင်းတဲ့ အကြောင်းအရာပဲ။ နောက်ထပ်ပြောပါဦး။",
    "ကျေးဇူးပါ။ ကျွန်တော် သင်နဲ့ စကားပြောရတာ ဝမ်းသာတယ်။ 🌸"
];

// 🔥 ဒီမှာ ရှေ့ဆက်လုပ်မယ် - Global variable မသုံးဘဲ In-memory သိမ်းမယ်
// (Vercel မှာ ပြန်စရင် ပြန်စမှာမို့ ဒီနည်းက အကောင်းဆုံး)
let mockIndex = 0;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // 🔥 API Key မရှိရင် Mock Reply ကို အလှည့်ကျ ပြန်ဖြေမယ်
    if (!apiKey) {
        const reply = mockReplies[mockIndex % mockReplies.length];
        mockIndex = (mockIndex + 1) % mockReplies.length; // နောက်တစ်ခါအတွက် ရှေ့သွားမယ်
        return res.status(200).json({ reply });
    }

    // Gemini API ကို ခေါ်မယ်
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();
        return res.status(200).json({ reply: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        return res.status(200).json({ 
            reply: "အင်း... ကျွန်တော် နည်းနည်းရှုပ်သွားတယ်။ နောက်တစ်ခါ ပြန်မေးကြည့်ပေးဦး။ 💖" 
        });
    }
}