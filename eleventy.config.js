import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

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
  

  // Plugins
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
}
