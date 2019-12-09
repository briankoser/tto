const iconShortcode = require('./icon-shortcode.js');

module.exports = function siteHeaderShortCode (layout) {
    return `
        <header class="site-header layout-${layout}">
            <img class="site-logo" src="/img/logo.svg">
            <h1 class="masthead">Ten to One</h1>
            <a id="site-nav-link" href="#site-nav" class="menu-link js-site-nav">${iconShortcode('menu-hamburger')} Menu</a>
        </header>`;
}