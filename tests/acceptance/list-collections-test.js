import { module, test } from 'qunit';
import { visit, currentURL, click, findAll, fillIn, triggerKeyEvent} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list collections', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Show message collections as the home page', async function (assert) {
      await visit('/');
      assert.equal(currentURL(), '/collections', 'should redirect automatically');
  });

  test('should show featured collections.', async function (assert) {
    await visit('/').then(function(){
      assert.equal(findAll('.posting').length, 3, 'should see 3 postings');
    });
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

  test('should filter the list of collections by category', async function(assert) {
    await visit('/');
    await fillIn('.list-filter input', 'historical');
    await triggerKeyEvent('.list-filter input', 'keyup', 72);
    assert.equal(this.element.querySelectorAll('.results .posting').length, 1, 'should display 1 posting');
    assert.ok(this.element.querySelector('.posting .subject').textContent.includes('Historical'), 'should contain 1 posting with category Historical');
  });

  // test('Link to user who made each collection', async function(assert) {
  // });
  // test('Sort collection list by popular', async function (assert) {
  // });
  // test('Show buttons to make a new collection', async function (assert) {
  // });
  // test('Show history of lists users used before', async function (assert) {
  // });

});
