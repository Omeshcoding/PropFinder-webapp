import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '8ec9ac0099mshaea4be626fed1e9p1170c0jsn7191363449a9',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
  return data;
};
