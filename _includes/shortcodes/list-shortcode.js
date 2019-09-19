module.exports = function listShortCode (host, list) {
    return `
<h2>${host}</h2>
<ol reversed>
${list.map(entry => `<li>${entry.replaced == undefined ? '' : '<span style="text-decoration:line-through;">' + entry.replaced + '</span> '}${entry}</li>`).join('\n')}
</ol>`;
}