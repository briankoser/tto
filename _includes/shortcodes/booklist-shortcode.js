module.exports = function bookListShortCode (data) {
    let dataToListItem = data => 
        `${data.replaced == undefined ? '' : `<del>${data.replaced}</del> `}
        ${data.book == undefined ? '' : `<a href="https://www.goodreads.com/book/show/${data.book}/">${data.title}</a>`}
        ${data.review == undefined ? '' : `<a href="https://www.goodreads.com/review/show/${data.review}/">${data.title}</a>`}`;

    return `
        ${data.host == undefined ? '' : `<h2>${data.host}</h2>`}
        <ol reversed>
        ${data.list.map(entry => {
            if (Array.isArray(entry)) {
                return `<li>${entry.map(e => dataToListItem(e)).join(', ')}</li>`;
            }
            else {
                return `<li>${dataToListItem(entry)}</li>`;
            }
        }).join('\n')}
        </ol>`;
}