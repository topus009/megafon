import axios from 'axios';
import { dbPrefix } from '../src/js/config/constants';

export const checkApiRunning = async () => {
  try {
    const res = await axios.get(`${dbPrefix}/contacts`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
