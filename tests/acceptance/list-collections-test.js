import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list collections', function(hooks) {
  setupApplicationTest(hooks);

  test('Show message collections as the home page', async function (assert) {
        await visit('/');
    assert.equal(currentURL(), '/collections', 'should redirect automatically');
  });	

  test('Link to about company information should be visible', async function (assert) {
	await visit ('/');
	await click (".menu-about");
	assert.equal(currentURL(), '/about', 'should navigate to about');
	});
  test('link to contact information page should be visible', async function(assert){
	await visit ('/');
	await click(".menu-contact");
	assert.equal(currentURL(), '/contact', 'should navigate to contact page');
});
  test('Link to user who made each collection', async function (assert) {
	});
  test('Filter collections by category, recent, or popular', async function (assert) {
	});
  test('Sort collection list by popular', async function (assert) {
	});
  test('Show more details about collection', async function (assert) {
	});
  test('Show buttons to make a new collection', async function (assert) {
	});
  test('Show history of lists users used before', async function (assert) {
	});

});
