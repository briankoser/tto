module.exports = function boardGameListShortCode (data) {
    return `
${data.host == undefined ? '' : `<h2>${data.host}</h2>`}
<ol reversed>
${data.list.map(entry => 
    `<li>
        <a href="https://boardgamegeek.com/boardgame/${entry.id}">${entry.title}</a>
    </li>`
).join('\n')}
</ol>`;
}