import DS from 'ember-data';

export default DS.Model.extend({
	image: DS.attr(),
	title: DS.attr(),
	owner: DS.attr(),
	category: DS.attr(),
	city: DS.attr(),
	quantity: DS.attr(),
	description: DS.attr()
});
