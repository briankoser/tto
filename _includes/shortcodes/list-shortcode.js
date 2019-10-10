module.exports = function listShortCode (data) {
    return `
${data.host == undefined ? '' : '<h2>' + data.host + '</h2>'}
<ol reversed>
${data.list.map(entry => 
    `<li>${entry}</li>`
).join('\n')}
</ol>`;
}