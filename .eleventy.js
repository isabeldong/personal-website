module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles.css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "data"
    }
  };
};
