import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

const ITEMS = [{category: 'Historical'}, {category: 'Empowerment'}, {category: 'Comedy'}];
const FILTERED_ITEMS = [{category: 'Historical'}];

module('Integration | Component | collection-posting', function(hooks) {
  setupRenderingTest(hooks);

//   test('should initially load all postings', async function (assert) {
//     this.set('filterByCategory', () => resolve({ results: ITEMS}));
  // });


  test('should initially load all postings', async function (assert) {
    this.set('filterByCategory', () => resolve({ results: ITEMS }));

    await render(hbs`
      {{#list-filter filter=(action filterByCategory) as |results|}}
        <ul>
          {{#each results as |item|}}
            <li class="category">
              {{item.category}}
            </li>
          {{/each}}
        </ul>
      {{/list-filter}}
    `);

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.category').length, 3);
      assert.equal(this.element.querySelector('.category').textContent.trim(), 'Historical');
    });
  });

  
  test('should update with matching listings', async function (assert) {
    this.set('filterByCategory', (val) => {
      if (val === '') {
        return resolve({
          query: val,
          results: ITEMS });
      } else {
        return resolve({
          query: val,
          results: FILTERED_ITEMS });
      }
    });

    await render(hbs`
      {{#list-filter filter=(action filterByCategory) as |results|}}
        <ul>
          {{#each results as |item|}}
            <li class="category">
              {{item.category}}
            </li>
          {{/each}}
        </ul>
      {{/list-filter}}
    `);

    await fillIn(this.element.querySelector('.list-filter input'), 'h');
    await triggerKeyEvent(this.element.querySelector('.list-filter input'), "keyup", 72);
      
    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.category').length, 1, 'One result returned');
      assert.equal(this.element.querySelector('.category').textContent.trim(), 'Historical');
    });
  });
});