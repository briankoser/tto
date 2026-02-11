module.exports = function episodeCardShortCode (guests, hosts, host_poster_last_name_offset, number, title, machineDate, readableDate, description, mp3_cdn_url, fileSlug, credits) {
    return `
    <article class="poster js-poster">
        <div class="hosts ${guests ? 'guests' : '' }">
            ${hosts.map(host => 
            `<div class="host">
                <svg height="3em" >
                    <defs>
                        <path id="hostNamePath" d="M10,60 A 40 15 5 0 1 50 450"/>
                    </defs>
                    <text fill="var(--color-yellow)">
                        <textPath xlink:href="#hostNamePath" class="first">${ host.split(' ')[0] }</textPath>
                        <textPath xlink:href="#hostNamePath" class="last" startOffset="${ host_poster_last_name_offset[host] }">${ host.split(' ')[1] }</textPath>
                    </text>
                </svg>
            </div>`
            ).join('\n')}
        </div>

        <section class="number">
            <svg width="100%" height="300">
                <defs>
                    <mask id="text-mask-${number}" x="0" y="0">
                        <text x="0" y="260">${number}</text>
                    </mask>
                </defs>

                <image width="700" xlink:href="/img/poster-number-background8.png" mask="url(#text-mask-${number})"/>
            </svg>
        </section>
        <section class="title">
            <div class="in">in</div>
            <div class="title-text-parent">
                <div class="title-text">${title}</div>
            </div>
        </section>
        <section class="contents">
            <div class="js-episode-block">
                <div class="media-buttons js-media-buttons">
                    <div class="play js-media-button"><svg class="icon icon-play"><use xlink:href="/img/icons/orion-sprite.svg#play"></use></svg></div>
                    <div class="pause js-media-button hidden"><svg class="icon icon-pause"><use xlink:href="/img/icons/orion-sprite.svg#pause"></use></svg></div>
                </div>
            </div>
            <span>On devices everywhere <time class="post-date dt-published" datetime='${machineDate}'>${readableDate}</time></span>
            
            <p class="description">${description}</p>
        </section>
        <section class="player">
            <audio src="${mp3_cdn_url}/${fileSlug}.mp3" preload="metadata" controls></audio>
        </section>
        <section class="credits">${ credits.join(" · ") }</section>
    </article>`;
}