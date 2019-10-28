module.exports = function youtubeShortCode (data) {
    let videoEmbed = '';
    if (data.id == undefined && data.playlistID == undefined) {
        videoEmbed = '<p>No video available</p>';
    }
    else if (data.id != undefined) {
        videoEmbed = `
<div class="video-embed-container">
    <iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/${data.id}${data.timestamp == undefined ? '' : `?t=${timestampToYouTubeTimestamp(data.timestamp)}`}" frameborder="0" allowfullscreen></iframe>
</div>`;
    }
    else if (data.playlistID != undefined) {
        videoEmbed = `
<div class="video-embed-container">
    <iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=${data.playlistID}" frameborder="0" allowfullscreen></iframe>}
</div>`;
    }

    return `
<figure>
    ${videoEmbed}
    ${data.caption == undefined 
        ? '' 
        : `
<figcaption>
    ${data.caption} 
    ${data.timestamp == undefined ? '' : `(${data.timestamp})`}
</figcaption>`
    }
</figure>`
};

let timestampToYouTubeTimestamp = function(timestamp) {
    let pieces = timestamp.split(':');
    return `${pieces[0]}m${pieces[1]}s`;
};