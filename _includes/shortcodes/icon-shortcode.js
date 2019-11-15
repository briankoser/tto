module.exports = function iconShortCode (name) {
    return `
<svg class="icon">
  <use xlink:href="/icons/orion-sprite.svg#${name}"></use>
</svg>`;
}