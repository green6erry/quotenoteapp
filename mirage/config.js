export default function() {
  this.namespace = '/api';

  this.get('/collections', function() {
    return {
      data: [{
        type: 'collections',
        id: 'grand-old-mansion',
        attributes: {
          title: 'US Presidents',
          owner: 'Amanda',
          city: 'San Francisco',
          category: 'Historical',
          quantity: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/330px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg'
        }
      }, {
        type: 'collections',
        id: 'urban-living',
        attributes: {
          title: 'Powerful Women',
          owner: 'Alex Jones',
          city: 'Seattle',
          category: 'empowerment',
          quantity: 13,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/440px-Oprah_in_2014.jpg'
        }
      }, {
        type: 'collections',
        id: 'downtown-charm',
        attributes: {
          title: 'Writers say the Darndest Things',
          owner: 'Sam Cook',
          city: 'Portland',
          category: 'comedy',
          quantity: 30,
          image: 'https://www.babelio.com/users/AVT_Oscar-Wilde_5324.jpg'
        }
      }]
    };
  });
}