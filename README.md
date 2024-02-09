# web-scraper-bc
Simple and efficient web scraper for Node.js project eliminating need for api calls with updated states
"web-scraper-easy" is a lightweight and user-friendly web scraping tool for Node.js applications. With minimal configuration, 
it allows you to effortlessly extract content from websites using powerful selectors. Utilizing Axios for HTTP requests and Cheerio for parsing HTML, 
"web-scraper-easy" simplifies the process of scraping articles, news, and other web content. 
Whether you're a beginner or an experienced developer, "web-scraper-easy" makes web scraping a breeze.



Example Use Case
<img width="988" alt="Screen Shot 2024-02-09 at 6 55 07 AM" src="https://github.com/BxCanady/web-scraper-bc/assets/64870171/05305f6f-58f3-4d17-909e-128a8243ad6f">
// Import the scrapeContent function from the scraper.service.js file
const scrapeContent = require('./scraper.service.js');

// Example usage:
// Replace with your choice of selectors
const commonElements = {
    // CSS selector for the article container
    articleSelector: '.foo_post_item',
    // CSS selector for the title of each article
    titleSelector: 'h4.foo_title',
    // CSS selector for the description of each article
    descriptionSelector: '.foo_description',
    // CSS selector for the link of each article
    linkSelector: '.foo_link',
    // CSS selector for the image of each article
    imageSelector: 'img.foo_image',
};

// Function to get content from a URL using specified selectors
const getContent = async (url, selectors) => {
    try {
        // Scrape content from the provided URL using the specified selectors
        const articles = await scrapeContent(url, selectors);
        // Output the scraped articles
        console.log(articles);
    } catch (error) {
        // Handle any errors that occur during scraping
        console.error("Error in getContent route handler:", error);
    }
};

// Example usage:
// Get content from the specified URL using the commonElements selectors
getContent('https://example.com/', commonElements);




