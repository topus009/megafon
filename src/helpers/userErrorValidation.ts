import _ from 'lodash';
import {
    hasOnlyDigits,
    yearIsLessThanCurrent,
    isEmpty
} from './common';
import * as types from '../types';

const userErrorValidators: types.UserErrorValidators = {
    fio: value => isEmpty(value),
    mainPhone: value => !hasOnlyDigits(value),
    workPhone: value => !hasOnlyDigits(value),
    dateOfBirth: value => !yearIsLessThanCurrent(value)
};

const requiredFields = [
    'fio'
];

const isError = (data: types.IsErrorData): types.IsErrorReturn => {
    const {key, value} = data;
    const getValidator = _.get(userErrorValidators, [key]);
    if(!getValidator) {
        return {key, error: false};
    }
    return {
        key,
        error: getValidator(value)
    };
};

export {
    isError,
    requiredFields
};
