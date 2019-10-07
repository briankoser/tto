module.exports = function youtubeListShortCode (data) {
    return `
${data.host == undefined ? '' : '<h2>' + data.host + '</h2>'}
<h3>Playlist</h3>
<iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=${data.playlistID}" frameborder="0" allowfullscreen></iframe>
<ol class="youtubelist" reversed>
${data.list.map(entry => `<li><h3>${entry.title}</h3><iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/${entry.id}" frameborder="0" allowfullscreen></iframe></li>`).join('\n')}
</ol>`;
}