import axios from 'axios';

export const LoginInstance = axios.create({
  baseURL: process.env.FETCH_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  }
});
