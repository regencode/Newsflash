"use strict";
const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: "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" 
});
async function main() {
    const chatCompletion = await getGroqSummary();
    // Print the completion returned by the LLM.
    process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
}
async function getGroqSummary(article) { // get article from newsapi after parsing HTML

    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are now a content summarizer. Your job is to summarize the user input to around 100 words. Condense information to make the summary shorter if possible, and use simpler words if applicable. Drop information that are the most redundant, irrelevant or not important if the word count limit is not yet met. At the end of the output, write 3 potential queries that the reader might write if they wish to know more about the content. Make sure the potential queries are as short as possible. IMPORTANT: DO NOT WRITE ANYTHING BEFORE THE SUMMARY. ONLY REFER TO THE ARTICLE FOR INFORMATION, DO NOT USE INFORMATION FROM OUTSIDE SOURCES."
            },
            {   
                role: "user",
                content: article
            }
        ],
        model: "llama3-8b-8192"
    });
}
module.exports = {
    main,
    getGroqSummary
};

main()