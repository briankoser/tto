module.exports = function iconShortCode (name) {
    return `
<svg class="icon icon-${name}">
  <use xlink:href="/img/icons/orion-sprite.svg#${name}"></use>
</svg>`;
}