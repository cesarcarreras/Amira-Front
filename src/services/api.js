import axios from 'axios';

//Validate if PROD or DEV
const ifProduction = process.env.NODE_ENV === 'production';

const baseURL = ifProduction ? "https://CHANGETHISBEFOREDEPLOY.com/api" : "http://localhost:3001/api";

export const _api = axios.create({
    withCredentials : true,
    baseURL,
    timeout:10000
});