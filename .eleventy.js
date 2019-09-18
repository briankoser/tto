module.exports = function(eleventyConfig) {
    const listShortCode = require('./_includes/shortcodes/list-shortcode.js');

    eleventyConfig.addFilter("readableDate", dateObj => DateTime.fromJSDate(dateObj).toISODate());

    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('episode', 'layouts/episode.njk');
    
    eleventyConfig.addShortcode("list", listShortCode);
};