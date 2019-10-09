module.exports = function linkListShortCode (data) {
    return `
${data.host == undefined ? '' : `<h2>${data.host}</h2>`}
<ol reversed>
${data.list.map(entry => 
    `<li>
        ${entry.replaced == undefined ? '' : `<span style="text-decoration:line-through;">${entry.replaced}</span> `}
        ${entry.url == undefined ? '' : `<a href="${entry.url}/">${entry.title}</a>`}
    </li>`
).join('\n')}
</ol>`;
}