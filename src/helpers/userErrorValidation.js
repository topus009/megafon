import {requiredFields} from '../reducers/app';
import {
    hasOnlyDigits,
    yearIsLessThanCurrent,
    isEmpty
} from './common';

const userErrorValidators = {
    fio: value => isEmpty(value),
    mainPhone: value => !hasOnlyDigits(value),
    workPhone: value => !hasOnlyDigits(value),
    dateOfBirth: value => !yearIsLessThanCurrent(value)
};

const isError = ({key, value}) => {
    if(!userErrorValidators[key]) {
        return {key, error: false};
    }
    return {
        key,
        error: userErrorValidators[key](value)
    };
};

export {
    isError,
    requiredFields
};
