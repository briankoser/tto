module.exports = function(eleventyConfig) {
    const { addHours, format, formatISO, formatRFC7231 } = require('date-fns');
    const util = require('util');

    const boardGameListShortCode = require('./_includes/shortcodes/boardgamelist-shortcode.js');
    const bookListShortCode = require('./_includes/shortcodes/booklist-shortcode.js');
    const cdnImageShortCode = require('./_includes/shortcodes/cdnimage-shortcode.js');
    const episodeBlockShortCode = require('./_includes/shortcodes/episodeblock-shortcode.js');
    const episodeCardShortCode = require('./_includes/shortcodes/episodecard-shortcode.js');
    const episodeInlineShortCode = require('./_includes/shortcodes/episodeinline-shortcode.js');
    const episodeMiniPosterShortCode = require('./_includes/shortcodes/episodeminiposter-shortcode.js');
    const episodePosterShortCode = require('./_includes/shortcodes/episodeposter-shortcode.js');
    const iconShortCode = require('./_includes/shortcodes/icon-shortcode.js');
    const listShortCode = require('./_includes/shortcodes/list-shortcode.js');
    const linkListShortCode = require('./_includes/shortcodes/linklist-shortcode.js');
    const movieShortCode = require('./_includes/shortcodes/movie-shortcode.js');
    const movieListShortCode = require('./_includes/shortcodes/movielist-shortcode.js');
    const siteHeaderShortCode = require('./_includes/shortcodes/siteheader-shortcode.js');
    const youtubeShortCode = require('./_includes/shortcodes/youtube-shortcode.js');
    const youtubeListShortCode = require('./_includes/shortcodes/youtubelist-shortcode.js');

    eleventyConfig.addFilter('dump', value => util.inspect(value));
    eleventyConfig.addFilter("getProperty", (object, property) => object[property]);
    eleventyConfig.addFilter("machineDate", dateObject => formatISO(dateObject, { representation: "date" }));
    eleventyConfig.addFilter("readableDate", dateObject => format(dateObject, "MMMM do, yyyy"));
    eleventyConfig.addFilter("rssDate", dateObject => formatRFC7231(dateObject));
    eleventyConfig.addFilter("rssTags", tags => tags.filter(tag => !['episodes'].includes(tag)));
    eleventyConfig.addFilter("setEpisodeReleaseTime", dateObject => addHours(dateObject, 20));
    eleventyConfig.addFilter("split", (stringToSplit, delim) => stringToSplit.split(delim));
    eleventyConfig.addFilter("year", dateObject => format(dateObject, 'yyyy'));

    eleventyConfig.addLayoutAlias('episode', 'layouts/episode.njk');
    eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
    eleventyConfig.addLayoutAlias('site', 'layouts/site.njk');
    
    eleventyConfig.addShortcode("boardGameList", boardGameListShortCode);
    eleventyConfig.addShortcode("bookList", bookListShortCode);
    eleventyConfig.addShortcode("cdnImage", cdnImageShortCode);
    eleventyConfig.addShortcode("episodeCard", episodeCardShortCode);
    eleventyConfig.addShortcode("episodeBlock", episodeBlockShortCode);
    eleventyConfig.addShortcode("episodeInline", episodeInlineShortCode);
    eleventyConfig.addShortcode("episodeMiniPoster", episodeMiniPosterShortCode);
    eleventyConfig.addShortcode("episodePoster", episodePosterShortCode);
    eleventyConfig.addShortcode("icon", iconShortCode);
    eleventyConfig.addShortcode("list", listShortCode);
    eleventyConfig.addShortcode("linkList", linkListShortCode);
    eleventyConfig.addShortcode("movie", movieShortCode);
    eleventyConfig.addShortcode("movieList", movieListShortCode);
    eleventyConfig.addShortcode("siteHeader", siteHeaderShortCode);
    eleventyConfig.addShortcode("youtube", youtubeShortCode);
    eleventyConfig.addShortcode("youtubeList", youtubeListShortCode);

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("img");
};