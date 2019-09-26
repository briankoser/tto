module.exports = function episodeBlockShortCode (episode, cdnUrl) {
    return `
<div class="episode-block">
    <audio src="${cdnUrl}/${episode.fileSlug}.mp3" preload="none"></audio>
    <header>Latest</header>
    <div class="play">▶️</div>
    <div class=️"pause">⏯</div>
    <div class="number">№ ${episode.data.number}</div>
    <div class="title">${episode.data.title}</div>
</div>`;
}