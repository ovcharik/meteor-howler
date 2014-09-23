Tinytest.add('Howler - exists', function (test) {
  test.isTrue(_.isObject(Howler), 'Howler not exists');
});

Tinytest.add('Howl - exists', function (test) {
  test.isTrue(_.isFunction(Howl), 'Howl not exists');
});
