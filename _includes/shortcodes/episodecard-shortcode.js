module.exports = function episodeCardShortCode (episode, readableDate, cdnUrl) {
    return `
<article class="episode episode-card h-entry">
    <header class="episode">
        <div class="number">№ ${episode.data.number}</div>
        <div class="title">${episode.data.title}</div>
    </header>
    <div>
        <p><time class="dt-published" datetime='${episode.date}'>${readableDate}</time> · <span class="e-content">${episode.data.description}</span></p>
    </div>
</article>`;
}