import { helper } from '@ember/component/helper';

const collectionTopicTypes = [
  'Historical',
  'comedy'
];

export function collectionContentCategory([collectionTopic]) {
  if (collectionTopicTypes.includes(collectionTopic)) {
    return 'Topic';
  }

  return 'Custom';
}


export default helper(collectionContentCategory);
