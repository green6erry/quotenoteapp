import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | collection-content-category', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly for a Topic-based collection', async function(assert) {
    this.set('inputValue', 'Historical');

    await render(hbs`{{collection-content-category inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Topic');
  });

  test('it renders correctly for a custom-made collection', async function(assert) {
    this.set('inputValue', 'powerful');

    await render(hbs`{{collection-content-category inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Custom');
  });
});
