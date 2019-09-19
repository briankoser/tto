module.exports = function(eleventyConfig) {
    const episodeCardShortCode = require('./_includes/shortcodes/episodecard-shortcode.js');
    const listShortCode = require('./_includes/shortcodes/list-shortcode.js');
    const linkListShortCode = require('./_includes/shortcodes/linklist-shortcode.js');
    const movieListShortCode = require('./_includes/shortcodes/movielist-shortcode.js');

    eleventyConfig.addFilter("readableDate", dateObj => DateTime.fromJSDate(dateObj).toISODate());

    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('episode', 'layouts/episode.njk');
    
    eleventyConfig.addShortcode("episodeCard", episodeCardShortCode);
    eleventyConfig.addShortcode("list", listShortCode);
    eleventyConfig.addShortcode("linkList", linkListShortCode);
    eleventyConfig.addShortcode("movieList", movieListShortCode);
};