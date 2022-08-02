import axios from 'axios';

const http = axios.create({
  headers: {
    Accept: 'application/json'
  },
  timeout: 300000
});

export default http;
