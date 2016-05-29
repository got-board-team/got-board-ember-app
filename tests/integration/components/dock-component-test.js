import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dock-component', 'Integration | Component | dock component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dock-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dock-component}}
      template block text
    {{/dock-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('#toggle expand the dock when it is collapsed', function(assert) {
  this.set("isExpanded", false);

  this.render(hbs`{{dock-component}}`);

  let collapsed = this.get('isCollapsed');
  assert.equal(collapsed, true);
});
