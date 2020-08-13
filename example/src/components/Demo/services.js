import axios from 'axios';

export const getPokemons = async (page, limit) => {
  const response = await axios({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    params: {
      limit,
      offset: page === 1 ? 0 : page * limit,
    }
  });
  
  return response.data.results;
};
