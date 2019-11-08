module.exports = function linkListShortCode (data) {
    return `
${data.host == undefined ? '' : `<h2>${data.host}</h2>`}
<ol reversed>
${data.list.map(entry => 
    `<li>
        ${entry.replaced == undefined ? '' : `<del>${entry.replaced}</del> `}
        ${entry.url == undefined ? `${entry.title}` : `<a href="${entry.url}/">${entry.title}</a> `}
        ${entry.comment == undefined ? '' : ` - ${entry.comment}`}
    </li>`
).join('\n')}
</ol>`;
}