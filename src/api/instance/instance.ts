import axios from 'axios';


const API_URL = 'https://lldev.thespacedevs.com/2.2.0';

export const instance = axios.create({
  baseURL: API_URL,
});