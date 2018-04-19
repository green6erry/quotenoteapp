import Route from '@ember/routing/route';

export default Route.extend({
model() {
    return [{
      id: 'us-presidents',
      title: 'US Presidents',
      owner: 'Amanda',
      city: 'San Francisco',
      category: 'Historical',
      quantity: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/330px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg',
      description: 'The President of the United States is the elected head of state and head of government of the United States. The president leads the executive branch of the federal government and is the commander-in-chief of the United States Armed Forces.'
    }, {
      id: 'powerful-women',
      title: 'Powerful Women',
      owner: 'Alex Jones',
      city: 'Seattle',
      category: 'empowerment',
      quantity: 13,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/440px-Oprah_in_2014.jpg',
      description: 'Hear what some women have said so that you can get through the thing'
    }, {
      id: 'funny-writers',
      title: 'Writers say the Darndest Things',
      owner: 'Sam Cook',
      city: 'Portland',
      category: 'comedy',
      quantity: 30,
      image: 'https://www.babelio.com/users/AVT_Oscar-Wilde_5324.jpg',
      description: 'Oscar Wilde was a hoot. Lighten up your day with a collection of ridiculous things writers have said'
    }];
  }
});
