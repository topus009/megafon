import axios from 'axios';
import _ from 'lodash';
import {dbPrefix} from '../config.local';

export const checkApiRunning = async () => {
    let res;
    try {
        res = await axios.get(dbPrefix + '/contacts');
        if(res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};

export const flushAllPromises = () =>
    new Promise(resolve => setImmediate(resolve));
