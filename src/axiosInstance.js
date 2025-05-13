import axios from 'axios';

const API_KEY = '29cf44b93ca83bf48d9356395476f7ad';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export default instance;
