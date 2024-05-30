// to get the summary
const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

// to get the news info
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9db96c78461f4b15b616dff2de09303c');

// to get the summary
"use strict";
const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: "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" 
});

async function getUrl(category) {
    try {
        const response = await newsapi.v2.topHeadlines({
            category: category, // business, entertainment, health, science, sports, technology
            language: 'en',
            pageSize: 2,
            country: 'us'
        });

        if (response.articles && response.articles.length > 0) {
            return response.articles[0].url;
        } else {
            throw new Error('No articles found');
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error; // Rethrow the error if you want to handle it further up the chain
    }
}

async function getContent(url) {
    try {
        const r2 = await axios.get(url);

        // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
        const dom = new JSDOM(r2.data, {
        url: url
        });

        // Now pass the DOM document into readability to parse
        const article = new Readability(dom.window.document).parse();

        // Done! The article content is in the textContent property
        return article.textContent;
    } catch (error) {
        console.error('Error fetching article content:', error);
        throw error;
  }
}

async function getGroqSummary(article) { // get article from newsapi after parsing HTML

    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are now a content summarizer. Your job is to summarize the user input to around 100 words. Condense information to make the summary shorter if possible, and use simpler words if applicable. Drop information that are the most redundant, irrelevant or not important if the word count limit is not yet met. At the end of the output, write 3 potential queries that the reader might write if they wish to know more about the content. Make sure the potential queries are as short as possible. IMPORTANT: DO NOT WRITE ANYTHING BEFORE THE SUMMARY AND AFTER THE POTENTIAL QUERIES. ONLY REFER TO THE ARTICLE FOR INFORMATION, DO NOT USE INFORMATION FROM OUTSIDE SOURCES."
            },
            {   
                role: "user",
                content: article
            }
        ],
        model: "llama3-8b-8192"
    });
}

async function main() {
    try {
        const url = await getUrl();
        console.log(url)
        console.log('--------------------------------------------------------------------')
        const text = await getContent(url); // Now you can use the URL variable
        console.log(text);
        console.log('--------------------------------------------------------------------')
        const chatCompletion = await getGroqSummary(article=text);
        // Print the completion returned by the LLM.
        process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();
