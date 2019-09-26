module.exports = function episodeBlockShortCode (episode, cdnUrl) {
    return `
<div class="episode-block">
    <audio src="${cdnUrl}/${episode.fileSlug}.mp3" preload="none"></audio>
    <div class="latest">Latest</div>
    <div class="play">P</div>
    <div class="pause hidden">||</div>
    <div class="episode">
        <div class="number">№ ${episode.data.number}</div>
        <div class="title">${episode.data.title}</div>
    </div>
</div>`;
}