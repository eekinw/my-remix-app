import axios from "axios";
import * as cheerio from "cheerio";

/**
 * Scrapes a webpage and extracts its main text content.
 * @param url - The URL of the webpage to scrape.
 * @returns A promise that resolves to the cleaned text content of the webpage.
 */
export async function scrapeWebpage(url: string): Promise<string> {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const $ = cheerio.load(html);

    const mainContent = $("article, .main-content, .content")
      .not("header, footer, aside, nav") 
      .find("p, h1, h2, h3")
      .map((_, el) => $(el).text().trim())
      .get()
      .filter((text) => text.length > 0)
      .join("\n");

    const cleanedText = mainContent
      .replace(/\s+/g, " ")
      .replace(/\n\s*\n/g, "\n\n")
      .trim();

    return cleanedText;
  } catch (error) {
    console.error("Error scraping the webpage:", error);
    throw new Error("Failed to scrape the webpage.");
  }
}

