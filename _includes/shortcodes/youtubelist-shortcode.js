const youtubeShortcode = require('./youtube-shortcode.js');

module.exports = function youtubeListShortCode (data) {
    return `
${data.host == undefined ? '' : `<h2>${data.host}</h2>`}
${data.playlistID == undefined ? '' : `<h3>Playlist</h3> ${youtubeShortcode(data)}`}
<ol class="youtubelist" reversed>
${data.list.map(entry => 
    `<li>
        <h3>${entry.title}</h3>
        ${youtubeShortcode(entry)}
    </li>`
).join('\n')}
</ol>`;
}