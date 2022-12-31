import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'ab4e1ad6cbmsh3f7557ccdb26be7p1e777ejsnedd595dbe127',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });

  return data;
};
