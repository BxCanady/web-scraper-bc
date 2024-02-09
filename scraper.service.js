const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

const scrapeContent = async (url, selectors) => {
    try {
        const { data } = await axios.get(url);

        const $ = cheerio.load(data);
        const articles = [];
        const baseUrl = new URL(url).origin; // Dynamically get the base URL

        $(selectors.articleSelector).each((index, element) => {
            let title = $(element).find(selectors.titleSelector).text();
            let description = $(element).find(selectors.descriptionSelector).text();
            let link = $(element).find(selectors.linkSelector).attr('href');
            // Get the image URL from the src attribute or fallback to a data attribute
            let imageUrl = $(element).find(selectors.imageSelector).attr('src');
            if (imageUrl === "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" || !imageUrl) {
                // If it's the placeholder or null, look for the actual image URL in data attributes
                imageUrl = $(element).find(selectors.imageSelector).attr('data-src') || $(element).find(selectors.imageSelector).attr('data-lazy-src');
            }

            // Convert relative links to absolute
            imageUrl = imageUrl && !imageUrl.startsWith('http') ? new URL(imageUrl, baseUrl).href : imageUrl;

            const article = { title, description, link, imageUrl };
            articles.push(article);
        });

        return articles;
    } catch (error) {
        console.error(`Error scraping content from ${url}: ${error.message}`);
        throw new Error(`Error scraping content: ${error.message}`);
    }
};

module.exports = scrapeContent;
