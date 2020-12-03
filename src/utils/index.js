import axios from 'axios';
import Config from '../config';

export const fetchAPIData = async (req) => {
    return await axios.get(`${Config.baseUrl}${req}&apiKey=${Config.apiKey}`);
};
