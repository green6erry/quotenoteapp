export default function() {
  this.namespace = '/api';

  let collections = [{
        type: 'collections',
        id: 'us-presidents',
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
        id: 'powerful-women',
        attributes: {
          title: 'Powerful Women',
          owner: 'Paul Jones',
          city: 'Seattle',
          category: 'empowerment',
          quantity: 13,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/440px-Oprah_in_2014.jpg'
        }
      }, {
        type: 'collections',
        id: 'funny-writers',
        attributes: {
          title: 'Writers say the Darndest Things',
          owner: 'Sam Cook',
          city: 'Portland',
          category: 'comedy',
          quantity: 30,
          image: 'https://www.babelio.com/users/AVT_Oscar-Wilde_5324.jpg'
        }
      }];
      this.get('/collections', function(db, request){
        if(request.queryParams.category !== undefined) {
          let filteredCollections = collections.filter(function(i) {
            return i.attributes.category.toLowerCase().indexOf(request.queryParams.category.toLowerCase()) !== -1;
          });
          return { data: filteredCollections };
        } else {
          return {data: collections };
        }
      });
}