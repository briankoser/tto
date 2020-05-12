module.exports = function cdnImageShortCode (image, cdnUrl, alt, caption) {
    return `
<figure>
    <img src="${cdnUrl}/${image}" alt="${alt}">
    ${caption == undefined ?
        `` :
        `<figcaption>${caption}</figcaption>`
    }
</figure>`;
}