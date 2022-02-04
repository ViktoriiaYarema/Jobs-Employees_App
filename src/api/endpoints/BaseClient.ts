import axios from 'axios';

const base ='https://5f7998dbe402340016f9321f.mockapi.io/'
const instance = axios.create({
  baseURL: base,
});

export default instance;
