import axios from 'axios';

export const getServerImages = async (page, limit) => {
  const response = await axios({
    method: 'GET',
    url: 'https://api.thecatapi.com/v1/images/search',
    headers: {
      'x-api-key': '3cdc845e-5d4c-44aa-a433-e5938a053106'
    },
    params: {
      limit,
      page
    }
  });
  
  return response.data;
};
