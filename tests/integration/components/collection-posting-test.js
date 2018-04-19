import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | collection-posting', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.collection = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      category: 'test-category',
      city: 'test-city',
      quantity: 3
    });
  });
    test('should display collection details', async function(assert) {
      await render(hbs`{{collection-posting collection=collection}}`);
      assert.equal(this.$('.posting h3').text(), 'test-title', 'Title: test-title');
      assert.equal(this.$('.posting .owner').text().trim(), 'Created by: test-owner', 'Owner: test-owner');
  });

  test('should toggle wide class on click', async function(assert) {
      await render(hbs`{{collection-posting collection=collection}}`);
      assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
      await click('.image');
      assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
      await click('.image');
      assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
  });
});
