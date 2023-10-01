import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '99d73ef3545547fbb7f6f775f1eb0967'
  }
});
