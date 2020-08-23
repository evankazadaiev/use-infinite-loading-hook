
let data;

const DELAY = (ms) => new Promise(res => setTimeout(res, ms));

const getResults = (page, limit) => {
  const next = !![].concat(data).slice(page === 1 ? 0 : ((page - 1) * limit), ((page - 1) * limit) + limit)
  const results = [].concat(data).slice(page === 1 ? 0 : ((page - 1) * limit), ((page - 1) * limit) + limit)
  return {
    next, results
  }
}

export const getServerImages = async (page, limit) => {
  if (!data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    data = await response.json();
    
    return getResults(page, limit);
  } else {
    
    await DELAY(2000);
    return getResults(page, limit);
  }
};
