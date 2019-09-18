module.exports = function listShortCode (host, list) {
    return `
<h2>${host}</h2>
<ol reversed>
${list.map(entry => `<li>${entry}</li>`).join('\n')}
</ol>`;
}