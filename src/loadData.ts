import 'isomorphic-fetch';

let cache = null;

function readCache(resourceType) {
	if (cache && cache[resourceType]) {
		return cache[resourceType];
	}
	// we throw the fetch Promise if we don't have the data in cache
	throw get(resourceType);
}

function get(resourceType) {
	return fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
	.then(res => {
    return res.json();
  })
  .then(data => {
    cache = {
      [resourceType]: data.filter((_, idx) => idx < 10)
    }
  });
}

export default {
	readCache,
	get,
};