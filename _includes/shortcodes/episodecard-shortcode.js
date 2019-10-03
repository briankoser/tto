module.exports = function episodeCardShortCode (episode, readableDate, cdnUrl) {
    return `
<article class="episode episode-card h-entry">
    <header class="episode">
        <a href="${cdnUrl}/${episode.url}">
            <div class="number">№ ${episode.data.number}</div>
            <div class="title">${episode.data.title}</div>
        </a>
    </header>
    <div class="summary">
        <p><time class="dt-published" datetime='${episode.date}'>${readableDate}</time> · <span class="e-content">${episode.data.description}</span></p>
    </div>
</article>`;
}