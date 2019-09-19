module.exports = function linkListShortCode (host, list) {
    return `
<h2>${host}</h2>
<ol reversed>
${list.map(entry => `<li>${entry.replaced == undefined ? '' : '<span style="text-decoration:line-through;">' + entry.replaced + '</span> '}${entry.url == undefined ? '' : '<a href="' + entry.url + '/">'}${entry.title}${entry.url == undefined ? '' : '</a>'}</li>`).join('\n')}
</ol>`;
}