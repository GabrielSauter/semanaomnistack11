import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.25.156:3333'
});

export default api;