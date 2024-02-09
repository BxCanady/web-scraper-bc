# web-scraper-bc
Simple and efficient web scraper for Node.js project for fetching content eliminating need for api calls with updated states
"web-scraper-easy" is a lightweight and user-friendly web scraping tool for Node.js applications. With minimal configuration, 
it allows you to effortlessly extract content from websites using powerful selectors. Utilizing Axios for HTTP requests and Cheerio for parsing HTML, 
"web-scraper-easy" simplifies the process of scraping articles, news, and other web content. 
Whether you're a beginner or an experienced developer, "web-scraper-easy" makes web scraping a breeze.



Example Use Case
<img width="988" alt="Screen Shot 2024-02-09 at 6 55 07 AM" src="https://github.com/BxCanady/web-scraper-bc/assets/64870171/05305f6f-58f3-4d17-909e-128a8243ad6f">


How to InStall
Open a terminal or command prompt.

Navigate to their project directory where they want to use your package.

Run the following command:

npm install web-scraper-bc


<img width="446" alt="image" src="https://github.com/BxCanady/web-scraper-bc/assets/64870171/85d88e9f-03a6-45bb-8b1d-6d525fce4c8b">
<img width="1302" alt="Screen Shot 2024-02-09 at 6 47 43 AM" src="https://github.com/BxCanady/web-scraper-bc/assets/64870171/68bd2c52-a4ec-4b5e-83b1-d9188140ec55">




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




