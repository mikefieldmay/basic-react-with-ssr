import 'isomorphic-fetch';

export default resourceType => {
  return fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      return {[`${resourceType}`]: data.filter((_, idx) => idx < 10)};
    });
};