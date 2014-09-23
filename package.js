Package.describe({
  name:    "ovcharik:howler",
  summary: "Javascript audio library for the modern web.",
  version: "1.1.25",
  git:     "https://github.com/ovcharik/meteor-howler"
});

Package.on_use(function (api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@0.9.0');

  api.add_files('vendor/howler.js', 'client');

  if (api.export)
    api.export(['Howler', 'Howl'], ['client']);
});

Package.on_test(function (api) {
  api.use(['ovcharik:howler', 'underscore', 'tinytest', 'test-helpers'], ['client']);
  api.add_files(['howler-tests.js'], ['client']);
});
