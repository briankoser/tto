module.exports = function episodeCardShortCode (number, title, url) {
    return `
    <article class="mini-poster ${number < 100 ? '.under-three-digits' : ''}">
        <section class="number">
            <a href="${url}">${number}</a>
        </section>
        <section class="title">
            <div class="title-text"><a href="${url}">${title}</a></div>
        </section>
        <a href="${url}" class="link">&nbsp;</a>
    </article>`;
}