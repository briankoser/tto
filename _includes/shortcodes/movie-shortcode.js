module.exports = function movieShortCode (movie) {
    if (Array.isArray(movie)) {
        return movie.map(m => movieToHtml(m)).join(', ');
    }
    else {
        return movieToHtml(movie);
    }
}

let movieToHtml = movie => {
    let replaced = movie.replaced == undefined ? '' : `<del>${movie.replaced}</del> `;
    
    if (movie.character == undefined) {
        return `
            ${replaced}
            ${movie.slug == undefined 
                ? `${movie.title}` 
                : `<a href="https://letterboxd.com/film/${movie.slug}/">${movie.title}</a>`}`;    
    } else {
        return `
            ${replaced}
            ${movie.character},
            ${movie.slug == undefined 
                ? `${movie.title}` 
                : `<a href="https://letterboxd.com/film/${movie.slug}/">
                       <i class="movie-title">${movie.title}</i>
                   </a>`
            }`;
    }
}