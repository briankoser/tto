module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('episode', 'layouts/episode.njk');
    
    eleventyConfig.addFilter("readableDate", dateObj => DateTime.fromJSDate(dateObj).toISODate());
};