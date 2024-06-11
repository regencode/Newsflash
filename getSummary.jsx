require('dotenv').config();
const Groq = require('groq-sdk')

const groq = new Groq({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
});

async function main() {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
            {
                role: "system",
                content: "you are a helpful assistant that summarizes the article content."
            },
            {
                role: "user",
                content: `Please summarize the article from this URL: ${text}`
            }
        ],
        model: "llama3-8b-8192",
    });

    process.stdout.write(chunk.choices[0]?.delta?.content || '');
    
};
