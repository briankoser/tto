module.exports = function youtubeShortCode (data) {
    return `
<figure>
    <div class="video-embed-container">
        ${data.playlistID == undefined ?
            `<iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/${data.id}" frameborder="0" allowfullscreen></iframe>` :
            `<iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=${data.playlistID}" frameborder="0" allowfullscreen></iframe>}`
        }
    </div>
    ${data.caption == undefined ?
        `` :
        `<figcaption>${data.caption}</figcaption>`
    }
</figure>`
};