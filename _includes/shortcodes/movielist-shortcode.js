module.exports = function movieListShortCode (host, list) {
    return `
<h2>${host}</h2>
<ol reversed>
${list.map(entry => `<li>${entry.replaced == undefined ? '' : '<span style="text-decoration:line-through;">' + entry.replaced + '</span> '}${entry.slug == undefined ? '' : '<a href="https://letterboxd.com/film/' + entry.slug + '/">'}${entry.title}${entry.slug == undefined ? '' : '</a>'}</li>`).join('\n')}
</ol>`;
}