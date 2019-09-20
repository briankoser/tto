module.exports = function episodeCardShortCode (episode, readableDate, cdnUrl) {
    return `
<article class="episode-card h-entry">
    <header>
        <div class="episode-number">№ ${episode.data.number}</div>
        <h1 class="p-name">${episode.data.title}</h1>
        <time class="dt-published" datetime='${episode.date}'>${readableDate}</time>
    </header>
    <div class="e-content">
        <audio src="${cdnUrl}/${episode.fileSlug}.mp3" preload="metadata" controls></audio>
        <p>${episode.data.description}</p>
    </div>
</article>`;
}