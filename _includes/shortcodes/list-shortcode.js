module.exports = function listShortCode (data) {
    return `
${data.host == undefined ? '' : '<h2>' + data.host + '</h2>'}
<ol reversed>
${data.list.map(entry => 
    `<li>
        ${entry.replaced == undefined ? '' : `'<span style="text-decoration:line-through;">${entry.replaced}</span> `}
        ${entry}
    </li>`
).join('\n')}
</ol>`;
}