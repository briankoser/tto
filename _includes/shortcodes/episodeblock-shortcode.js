module.exports = function episodeBlockShortCode (episode, heading, cdnUrl) {
    return `
<div class="episode-block js-episode-block">
    <audio src="${cdnUrl}/${episode.fileSlug}.mp3" preload="none"></audio>
    <div class="heading">${heading}</div>
    <div class="media-buttons js-media-buttons">
        <div class="play js-media-button">P</div>
        <div class="pause js-media-button hidden">||</div>
    </div>
    <div class="episode">
        <div class="number">№ ${episode.data.number}</div>
        <div class="title">${episode.data.title}</div>
    </div>
</div>`;
}