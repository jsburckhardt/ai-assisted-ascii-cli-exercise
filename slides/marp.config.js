// Marp CLI configuration for the workshop deck.
// Enables inline HTML (used for the card/grid layouts) and registers the
// custom GitHub-dark theme so `theme: github-dark` resolves in deck.md.
module.exports = {
  html: true,
  themeSet: ['./themes'],
  allowLocalFiles: true,
};
