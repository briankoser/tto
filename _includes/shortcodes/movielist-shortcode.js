module.exports = function movieListShortCode (data) {
    return `
${data.host == undefined ? '' : `<h2>${data.host}</h2>`}
<ol reversed>
${data.list.map(entry => 
    `<li>
    ${entry.replaced == undefined ? '' : `<span style="text-decoration:line-through;">${entry.replaced}</span> `}
    ${entry.slug == undefined ? '' : `<a href="https://letterboxd.com/film/${entry.slug}/">${entry.title}</a>`}
    </li>`
).join('\n')}
</ol>`;
}