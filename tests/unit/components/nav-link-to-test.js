import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | nav-link-to', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let component = this.owner.factoryFor('component:nav-link-to').create();

    assert.ok(component);
    assert.equal(component.tagName, 'li');
    assert.equal(component.hrefForA, '#')
  });
});
