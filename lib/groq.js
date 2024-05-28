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


    var article = `Update: The Starliner mission will not move forward until no earlier than May 17, NASA announced. The long delay is to ensure launch provider United Launch Alliance can roll the rocket back to the Vertical Integration Facility hangar to replace a valve.

Boeing’s Starliner launch tonight has been postponed “out of an abundance of caution” scarcely two hours before the historic liftoff. The scrub is reportedly due to an issue with the oxygen relief valve on the Atlas V rocket’s upper stage.





There are backup launch opportunities on May 7, 10 and 11. After years of delays and over $1 billion in cost overruns, the mission is set to be Boeing’s first attempt to transport astronauts to the International Space Station.      

Once the issue is resolved with the upper stage, the United Launch Alliance (ULA) Atlas V will carry the CST-100 Starliner capsule to orbit along with the two onboard astronauts — Butch Wilmore and Suni Williams — from Florida’s Cape Canaveral at 10:34 p.m. local time Monday evening. The mission also marks the first time ULA’s Atlas will carry crew. The rocket boasts a success rate of 100% across 99 missions. (ULA is a joint venture of Boeing and Lockheed Martin.)





The astronauts would now dock at the station at the earliest on Thursday, where they would remain for at least eight days. The two astronauts will return to Earth in the capsule no earlier than May 16.

If all goes to plan, Boeing will be able to finally certify its Starliner for human transportation and begin fulfilling the terms of its $4.2 billion NASA astronaut taxi contract. That contract, under the agency’s Commercial Crew Program, was awarded in 2014. Elon Musk’s SpaceX was also granted a contract under that program, for its Crew Dragon capsule, and has been transporting astronauts to and from the ISS since 2020.

While SpaceX has soared in its human transportation services, flying over a dozen crewed missions and also racking up private flights with Axiom Space and billionaire Jared Isaacman, Boeing has fallen sharply behind. The aerospace giant originally attempted an uncrewed mission to the ISS in 2019, though that failed due to technical issues; further problems delayed the next attempt, until it was finally accomplished in 2022.






As of last year, Boeing had rung up $1.5 billion in charges due to the long-delayed Starliner program.





But despite the technical snags, both NASA and Boeing have stressed their commitment to the mission and to the safety of the two astronauts.

“The lives of our crew members, Suni Williams and Butch Wilmore, are at stake,” NASA’s associate administrator Jim Free said in a press conference late last month. “We don’t take that lightly at all.”

Indeed, for NASA, a successful mission will bring the agency one step closer to having two operational transportation providers, bringing critical redundancy to the Commercial Crew program. Per Boeing’s contract, it is on the line for six astronaut missions.

Musk took to X, the social media platform he also owns, to comment on the mission, noting that “although Boeing got $4.2 billion to develop an astronaut capsule and SpaceX only got $2.6 billion, SpaceX finished 4 years sooner.”     


Although Boeing got $4.2 billion to develop an astronaut capsule and SpaceX only got $2.6 billion, SpaceX finished 4 years sooner. Note, the crew capsule design of Dragon 2 has almost nothing in common with Dragon 1. Too many non-technical managers at Boeing. https://t.co/bTXWAfxfrh— Elon Musk (@elonmusk) May 6, 2024`;

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
module.exports = {
    main,
    getGroqSummary
};

main()