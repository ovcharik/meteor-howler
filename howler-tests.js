Tinytest.add('Howler - exists', function (test) {
  test.isTrue(_.isObject(this.Howler), 'Howler not exists');
});

Tinytest.add('Howl - exists', function (test) {
  test.isTrue(_.isFunction(this.Howl), 'Howl not exists');
});
