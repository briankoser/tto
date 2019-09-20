module.exports = function episodeInlineShortCode (episode, cdnUrl) {
    return `
        <span class="episode-inline js-episode-inline">
            № ${episode.data.number} ${episode.data.title}
            <audio src="${cdnUrl}/${episode.fileSlug}.mp3" preload="none"></audio>
            <button>Play</button>
        </span>`;
}