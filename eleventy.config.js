import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import { HtmlBasePlugin } from '@11ty/eleventy';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

export default async function(eleventyConfig) {
  // Short codes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // Filters
  eleventyConfig.addFilter('since', (startYear) => {
    const now = parseInt(new Date().getFullYear());
    const then = parseInt(startYear);

    return now - then;
  });
  eleventyConfig.addFilter('prettydate', (date) => {
    return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date)).toString();
  });
  eleventyConfig.addFilter("readingTime", (content) => {
    const WORDS_PER_MINUTE = 238;

    if (typeof content !== "string") {
      return "0 minutos";
    }

    const wordCount = content
      .split(/\s+/)
      .filter((word) => word.length > 0).length;

    const readingTimeMinutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

    return `${readingTimeMinutes} minuto${readingTimeMinutes > 1 ? "s" : ""}`;
  });
  

  // Plugins
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Preprocesessors
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });
}
