module.exports = function(eleventyConfig) {
    const boardGameListShortCode = require('./_includes/shortcodes/boardgamelist-shortcode.js');
    const bookListShortCode = require('./_includes/shortcodes/booklist-shortcode.js');
    const cdnImageShortCode = require('./_includes/shortcodes/cdnimage-shortcode.js');
    const episodeCardShortCode = require('./_includes/shortcodes/episodecard-shortcode.js');
    const episodeBlockShortCode = require('./_includes/shortcodes/episodeblock-shortcode.js');
    const episodeInlineShortCode = require('./_includes/shortcodes/episodeinline-shortcode.js');
    const iconShortCode = require('./_includes/shortcodes/icon-shortcode.js');
    const listShortCode = require('./_includes/shortcodes/list-shortcode.js');
    const linkListShortCode = require('./_includes/shortcodes/linklist-shortcode.js');
    const movieShortCode = require('./_includes/shortcodes/movie-shortcode.js');
    const movieListShortCode = require('./_includes/shortcodes/movielist-shortcode.js');
    const youtubeShortCode = require('./_includes/shortcodes/youtube-shortcode.js');
    const youtubeListShortCode = require('./_includes/shortcodes/youtubelist-shortcode.js');

    let humanizeDate = dateObj => dateObj.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
    eleventyConfig.addFilter("readableDate", humanizeDate);
    eleventyConfig.addFilter("episodeReadableDate", episode => humanizeDate(episode.date));
    
    let machineDate = dateObj => dateObj.toISOString().slice(0, 10);
    eleventyConfig.addFilter("machineDate", machineDate);
    eleventyConfig.addFilter("episodeMachineDate", episode => machineDate(episode.date));

    eleventyConfig.addFilter("rssTags", tags => tags.filter(tag => !['episodes'].includes(tag)));
    eleventyConfig.addFilter("utcString", dateObj => dateObj.toUTCString().replace(' GMT', ''));
    eleventyConfig.addFilter("year", dateObj => dateObj.getFullYear());

    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('episode', 'layouts/episode.njk');
    
    eleventyConfig.addShortcode("boardGameList", boardGameListShortCode);
    eleventyConfig.addShortcode("bookList", bookListShortCode);
    eleventyConfig.addShortcode("cdnImage", cdnImageShortCode);
    eleventyConfig.addShortcode("episodeCard", episodeCardShortCode);
    eleventyConfig.addShortcode("episodeBlock", episodeBlockShortCode);
    eleventyConfig.addShortcode("episodeInline", episodeInlineShortCode);
    eleventyConfig.addShortcode("icon", iconShortCode);
    eleventyConfig.addShortcode("list", listShortCode);
    eleventyConfig.addShortcode("linkList", linkListShortCode);
    eleventyConfig.addShortcode("movie", movieShortCode);
    eleventyConfig.addShortcode("movieList", movieListShortCode);
    eleventyConfig.addShortcode("youtube", youtubeShortCode);
    eleventyConfig.addShortcode("youtubeList", youtubeListShortCode);

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("img");
};