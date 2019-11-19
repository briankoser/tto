const movieShortcode = require('./movie-shortcode.js');

module.exports = function movieListShortCode (data) {
    return `
        ${data.host == undefined ? '' : `<h2>${data.host}</h2>`}
        <ol reversed>
        ${data.list.map(entry => 
            `<li>
            ${movieShortcode(entry)}
            </li>`
        ).join('\n')}
        </ol>`;
}