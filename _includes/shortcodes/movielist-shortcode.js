module.exports = function movieListShortCode (data) {
    return `
${data.host == undefined ? '' : `<h2>${data.host}</h2>`}
<ol reversed>
${data.list.map(entry => 
    `<li>
    ${entry.replaced == undefined ? '' : `<del>${entry.replaced}</del> `}
    ${entry.character == undefined ? '' : `${entry.character}, `}
    ${entry.slug == undefined ? `${entry.title}` : `<a href="https://letterboxd.com/film/${entry.slug}/">${entry.character == undefined ? '' : '<i class="movie-title">'}${entry.title}${entry.character == undefined ? '' : '</i>'}</a>`}
    </li>`
).join('\n')}
</ol>`;
}