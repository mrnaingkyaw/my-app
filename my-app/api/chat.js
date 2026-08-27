import { GoogleGenerativeAI } from "@google/generative-ai";

// 🌟 Mock Replies (API Key မရှိရင် ဒီထဲက အလှည့်ကျ ပြန်ဖြေမယ်)
const mockReplies = [
    "ဟယ်လို! ကျွန်တော် သင့် AI စကားပြောသူပါ။ 💕",
    "ဒီနေ့ ဘယ်လိုနေလဲ? ပျော်နေမယ်ထင်တယ်။",
    "ဆက်ပြောပါဦး၊ ကျွန်တော် နားထောင်နေတယ်။ ✨",
    "စိတ်ဝင်စားစရာကောင်းတဲ့ အကြောင်းအရာပဲ။ နောက်ထပ်ပြောပါဦး။",
    "ကျေးဇူးပါ။ ကျွန်တော် သင်နဲ့ စကားပြောရတာ ဝမ်းသာတယ်။ 🌸"
];
let mockIndex = 0;

export default async function handler(req, res) {
    // ၁။ POST method ပဲ လက်ခံမယ်
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // ၂။ API Key ကို Vercel Environment ကနေ ယူမယ်
    const apiKey = process.env.GEMINI_API_KEY;

    // ၃။ API Key မရှိရင် (သို့) စမ်းသပ်ချိန်မှာ Mock ပြန်ဖြေမယ်
    if (!apiKey) {
        const reply = mockReplies[mockIndex % mockReplies.length];
        mockIndex++;
        return res.status(200).json({ reply });
    }

    // ၄။ Gemini API ကို တကယ်ခေါ်မယ်
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json({ reply: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        // Error ဖြစ်ရင်လည်း Mock Reply ကို ပြန်သုံးမယ် (ဒါမှ သုံးစွဲသူကို ဖော်ရွေစွာ ပြန်ဖြေနိုင်မယ်)
        const reply = mockReplies[mockIndex % mockReplies.length];
        mockIndex++;
        return res.status(200).json({ reply });
    }
}