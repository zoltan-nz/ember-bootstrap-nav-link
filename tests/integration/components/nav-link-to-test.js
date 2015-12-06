import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-link-to', 'Integration | Component | nav link to', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{#nav-link-to 'index'}}Home{{/nav-link-to}}`);

  assert.equal(this.$().text().trim(), 'Home');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#nav-link-to 'index'}}
      Home
    {{/nav-link-to}}
  `);

  assert.equal(this.$().text().trim(), 'Home');
});
