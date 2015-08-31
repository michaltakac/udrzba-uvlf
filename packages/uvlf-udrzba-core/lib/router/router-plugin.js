Router.plugin('ensureSignedIn', {
  only: [
  'ziadanky',
  'ziadanka',
  'poziadavkaNakup',
  'poziadavkaOprava',
  'ziadankaEdit'
  ]
});