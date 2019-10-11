module.exports = function cdnImageShortCode (image, cdnUrl, alt, caption) {
    return `
<figure>
    <img src="${cdnUrl}/img/${image}" alt="${alt}">
    ${caption == undefined ?
        `` :
        `<figcaption>${caption}</figcaption>`
    }
</figure>`;
}