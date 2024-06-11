const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('72732988b60f4dd9b9f64b42c406d246');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  category: 'business', // business, entertainment, health, science, sports, technology
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});