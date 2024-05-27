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


    var article = `Good sleep starts with investing in a great mattress. Whether you're dealing with aches and pains or it's just time for an upgrade, Memorial Day is the perfect time to take the plunge on a new bed, pillows, sheets and whatever else you need to get a better night's sleep.

We did the hard part for you and gathered the best Memorial Day mattress deals out there. We have been researching and writing about mattresses for quite some time, so it's safe to say we know a quality deal when we see one. Plenty of options are in this list, but be sure to visit often as we will be updating with new bargains you should be aware of.


Please note: The prices listed for these Memorial Day sales are for queen mattress sizes.

Best Memorial Day mattress sales going on right now

Jonathan Gomez/CNET
Nectar
Up to 40% off mattresses
You can get up to 40% off mattresses from mattress giant Nectar. I consider Nectar mattresses generally affordable compared to other brands, so up to 40% off is hard to beat. If you love memory foam, look no further than Nectar’s slow-responding memory foam beds. 

You can get the flagship memory foam Nectar mattress for $649 instead of $1,099 or the hybrid version for only $799. Even higher-tier beds from Nectar are on sale. The memory foam Nectar Premier mattress is only $949 for Memorial Day.
See at Nectar

Jon Gomez - CNET
Saatva
Up to $600 off
Saatva’s Early Access mattress sale is up to $600 off mattresses. Saatva makes some of the most high-quality luxury mattresses. That means they’re also more expensive than other options. 

The more expensive the mattress, the more you’ll get off with this sale. For example, the Saatva Classic mattress, which retails for $2,095, is available for $1,795. That’s $300 off. It’s not the biggest sale you’ll see, but Saatva offers a level of luxury that you can’t get anywhere else.
See at Saatva

Jonathan Gomez/CNET
DreamCloud
Up to 50% off mattresses
DreamCloud continues to offer some of the most generous mattress sales on the market. Most brands average between 25% and 35% off. DreamCloud’s Memorial Day mattress sale is up to 50% off beds. For beds that are as high quality and comfortable as DreamCloud, I’d say this is one of the best deals going on right now. 

That means you can get the DreamCloud Hybrid mattress for $665 and the DreamCloud Premier for $949. Premium hybrid mattresses for under $1,000 are few and far between.
See at DreamCloud


Mattress Firm
Mattress Firm
Save up to $700 + free adjustable base
During Mattress Firm's Memorial Day sale, which lasts until June 11, you can save up to $700 on select top brands, including Serta, Purple, Beautyrest and more. Not only that, but you can score a free adjustable base with your purchase (up to a $499 value) if you apply the code ELEVATE at checkout and get an extra 25% off with the code HOLIDAY.
See at Mattress Firm

Dillon Lopez/CNET
Casper
Up to 35% off sitewide
You can get 30% off all of Casper’s mattresses right now, making it a great chance to snag one of Casper’s newest beds for less. This includes The One for $870, Dream for $1,305 and Snow for $1,745. Casper pillows and bedding are also included in this sale at 10%, and bundles are 35% off.
See at Casper

Jon Gomez - CNET
WinkBeds
Save $300 on mattresses
WinkBeds is running a $300 off mattress sale for Memorial Day. While it might not seem like the most generous sale, it’s a good chance to get luxury mattresses for less. The sale includes one of my favorite mattresses, The WinkBed, which you can get for $1,499 right now. If you’re looking for an environmentally friendly option, The EcoCloud is also on sale for $1,699. 
See at WinkBeds

Brooklyn Bedding
30% off everything with code MEMORIAL30
Brooklyn Bedding is running a Memorial Day mattress deal of 30% off everything, including our best overall mattress pick, the Brooklyn Bedding Signature. You can snag a queen-sized Signature Hybrid mattress for $932.40 during the sale. If you’re a hot sleeper, opt for one of our favorite cooling mattresses, the Aurora Luxe, which is available for $1,585.50. 

To take advantage of this Memorial Day sale from Brooklyn Bedding, use code MEMORIAL30. The sale ends May 27. 
See at Brooklyn Bedding

CNET
Purple
Up to $800 off mattresses + bases
You can get up to $800 off mattresses and bases during Purple’s Memorial Day mattress sale. Savings will depend on the mattress you’re interested in. The Purple Restore bed, our pick for the best hybrid mattress, is $300 off and $400 off if you also buy the adjustable frame. The higher-priced beds will have a higher discount, like the Purple Rejuvenate, which you can get for $4,995. 

You can’t get the uniqueness of the Purple Grid anywhere else. That means that Purple beds are pretty expensive. So it’s nice to see a couple hundred off the top of that high price tag.
See at Purple

Jonathan Gomez/CNET
Helix
Up to 30% off
For Memorial Day, Helix is offering 25% off everything across the site and 30% off Luxe and Elite Models, which are the higher-tier beds from Helix. You’ll also get two free pillows with your purchase. 

Helix does beds differently from other brands. The Helix design targets specific sleeping preferences, with some of the most high-quality mattresses at affordable pricing. Our selection of the best mattress for plus-sized sleepers, Helix Plus, is on sale for $1,099. 

The 25% off is auto-applied when you check out, but you’ll need to use the code MEMDAY30 to get that extra 5% on Luxe and Elite beds.
See at Helix

Jonathan Gomez
Layla
Up to $200 off + 2 free pillows
If you’re interested in a flippable mattress with two firmness options, consider Layla. Layla beds are some of the most comfortable flippable beds you can get. For Memorial Day, you can get up to $200 off with two free pillows included with your purchase. 

While $200 off might not seem as big as other brands, Layla’s mattresses are already generally affordable compared to other options. The Hybrid mattress is now $1,499. Several other sleep essentials from Layla are also discounted, like the weighted blanket, sheets and adjustable bases.
See at Layla

Jonathan Gomez/CNET
Bear
40% off mattresses + 35% off everything else
Bear is running a 35% off sitewide sale including 40% off mattresses with code MD4TY for Memorial Day, which will bring the cost of the Bear Original mattress down to only $649. This is one of the cheapest beds you can get online. The Elite Hybrid, Bear’s most luxurious hybrid bed, is $1,499 instead of $2,305.

If 35% off isn’t enough, you also get two free pillows, sheets and a bed protector when you buy a mattress during Memorial Day. That’s a $400 value in sleep accessories. It’s one of the more generous sales going on right now.
See at Bear

Titan
30% off everything with code MEMORIAL30
Titan offers exceptionally supportive mattresses that are perfect for plus-sized sleepers. You can get either of the popular beds from Titan for 30% off when you use code MEMORIAL30. 

That brings the Titan Plus down to $874.30 and the Titan Plus Luxe to $1,119.30. We think the Titan Plus is one of the best firm mattresses heavy sleepers can get. The 30% off sale is sitewide and applies to Titan’s pillows, sheets, bases and more. 

Titan’s Memorial Day mattress sale ends May 27.
See at Titan

Jonathan Gomez/CNET
Dreamfoam
30% off when you use code MEMORIAL30
Budget shoppers will be glad to know that the budget beds from Dreamfoam are also on sale during Memorial Day. When testing, we were surprised by the solid quality of the Dreamfoam Doze mattress because the price was so low.

Right now, you can get Dreamfoam mattresses for 30% off when you use the code MEMORIAL30. With this sale, the Dreamfoam Doze mattress is only $168 for a queen, and the Dreamfoam Hybrid is only $559.30. The sale extends across the site, so you can snag sleep essentials like pillows, sheets and bases.

Dreamfoam's Memorial Day sale ends May 27.
See at Dreamfoam

Jonathan Gomez/CNET
Sleep Number
Save up to 50% on smart beds
For Memorial Day, Sleep Number is running several sales, including 50% off the iLE smart bed, 30% off the i8 smart bed, 30% off furniture and BOGO 50% off pillows and sheets. It’s no secret I’m a fan of Sleep Number bed accessories. I’ve recently been sleeping on the True Temp sheet set, and they’re both comfortable and cool. If you’ve been thinking about buying, now is a good time. 

Additionally, Sleep Number offers a Special Hero Discount for military members, veterans, educators, first responders and healthcare workers. The Special Hero Discount is an extra 5 to 10% off on smart beds and bases until June 2.
See at Sleep Number

Jonathan Gomez/CNET
Leesa
30% off mattresses + free sleep bundle.
Leesa makes some of the most accommodating mattresses that you can get. For Memorial Day, Leesa offers 30% off mattresses, including beds like the Leesa Original, Sapira Hybrid and Legend Hybrid. You’ll also get two free pillows and a sheet set with your purchase.

That means the Original Hybrid mattress from Leesa is $1,049 instead of the retail $1,499 for a queen. 
See at Leesa

Jonathan Gomez/CNET
Tuft & Needle
Up to $700 off mattresses + 20% off bedding
Tuft & Needle Memorial Day mattress sales are dropping the price of several of the brand’s beds. The Mint Hybrid bed is $1,456.35 right now, and the Essential Tuft & Needle Original mattress is $716. You can also add any Tuft & Needle bedding, pillows, toppers and protectors for 20% off.
See at Tuft & Needle

Nolah
35% off mattresses + free pillows
Nolah is another popular brand that makes mattresses that are really comfortable and accommodating. It also offers one of the most generous Memorial Day mattress sales at 35% off on mattresses with free pillows included. That means you’ll be able to get a queen Nolah Original bed for only $942 compared to $1,449.

Nolah’s Memorial Day mattress sale includes the Original Hybrid, Nolah Evolution and Nolah Natural.
See at Nolah

Plank
30% off sitewide with code MEMORIAL30
Firm mattress lovers will be happy to know Plank is running a 30% off Memorial Day mattress sale. The sale is sitewide, including sleep accessories and popular beds like the Plank Firm and Plank Luxe Firm mattresses. This discount will drop the Plank Firm mattress cost to $932.40. 

To take advantage of this sale, use the code MEMORIAL30. The sale ends May 27.
See at Plank

My Slumber Yard
Amerisleep
Save $450 on mattresses with code AS450
For Memorial Day, Amerisleep is offering $450 off all of their mattresses, including the AS2, AS3 and AS5 when you use code AS450. That means the AS2 is only $1,099 and the popular AS3 is $1,299. Sleep accessories like pillows and bedding, and bed bases are also on sale.
See at Amerisleep

Beautyrest
Beautyrest
Save up to $1200 off select mattresses
During Memorial Day, you can save up to $1,200 off select Beautyrest Black or Harmony Lux mattresses with the purchase of an adjustable base. Right now, the Beautyrest Black is $1,699. Beautyrest beds are pretty expensive, so hundreds off can make a big difference.
See at Beautyrest

Serta
Serta
Up to $900 off select mattresses + bases
Popular mattress brand Serta is running an up to $900 Memorial Day mattress sale when you pair it with select bases. Mattresses on sale include the iComfortECO Foam and iComfortECO Quilted hybrid. Serta’s Memorial Day sale ends June 3. 
See at Serta

Naturepedic
Naturepedic
20% sitewide with code MEMORIAL20
If you’re looking for a sustainable brand that makes eco-friendly products, check out Naturepedic. For Memorial Day, you can get 20% off sitewide when you use the code MEMORIAL20.
See at Naturepedic
Amazon
Starting at about $200
Buying a mattress on Amazon can be a great way to save some cash while investing in better sleep. With mattresses starting at less than $200 from a variety of brands, including Lucid, Zinus and more, these deals are worth a look.
See at Amazon
Is Memorial Day a good time to buy a mattress?
Memorial Day is one of the biggest times for mattress discounts. You'll see not only some of the most generous sales or bundles but also a long sales runway. Memorial Day mattress discounts hang around for three weeks usually, meaning you have more chances to save. 

The average sale will be between 20% and 35%, although some brands like DreamCloud offer higher sales. If you've been researching beds and seriously considering buying one, Memorial Day is one of the best times to buy. 

How much should you spend on a good bed?
As with anything, the cost of a bed depends on what it's made of, the size and the bed's durability. There's no one number that you shouldn't cross or go below; it depends on what you want and your budget. 

The average cost of an online mattress is between $800 and $1,200. There are extremely comfortable and quality mattresses at every price point. You can get budget mattresses like the Dreamfoam Doze for under $500 or luxury beds that cost well over $2,500. 

That's why it's so important to define your budget. Holidays like Memorial Day are also a good way to offset the cost and get higher-quality beds for less. 

Impulse Buys Under $25 That Actually Make Great Gifts



+18 More
See all photos 
How we choose the best Memorial Day Mattress deals
Many of us here at CNET have covered shopping events for over five years, including Black Friday, Prime Day, Memorial Day and countless other shopping events. We've gotten very good at weeding out scams and superficial deals so you see only the best offers from all over. 

We look for real discounts, quality reviews and remaining sale time when choosing a mattress deal to show you. We have a team of sleep experts who have tested over 200 mattresses.

Real discounts mean exactly that. We look at the price history for that product to make sure no brands are inflating prices to make the discount seem more substantial than it is.
Quality reviews and testing are important for any product, but especially for a mattress. If you're unhappy the first time you use it, the discount wasn't really worthwhile. 
Remaining sale time is a huge part of our vetting process. If a deal seems like it will only be around for a short while or will only be available for the remaining stock, we'll let you know upfront so you don't come back to the deal later only to be disappointed. 
The information contained in this article is for educational and informational purposes only and is not intended as health or medical advice. Always consult a physician or other qualified health provider regarding any questions you may have about a medical condition or health objectives.`;

    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are now a content summarizer. Your job is to summarize the user input to under 100 words or less. Condense information to make the summary shorter if possible, and use simpler words if applicable. Drop information that are the most redundant, irrelevant or not important if the word count limit is not yet met. At the end of the output, write 3 potential queries that the reader might write if they wish to know more about the content. Make sure the potential queries are as short as possible. IMPORTANT: DO NOT WRITE ANYTHING BEFORE THE SUMMARY AND AFTER THE POTENTIAL QUERIES. ONLY REFER TO THE ARTICLE FOR INFORMATION, DO NOT USE INFORMATION FROM OUTSIDE SOURCES."
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
    getGroqChatCompletion
};

main()