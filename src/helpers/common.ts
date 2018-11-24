import * as types from '../types';

const hasOnlyDigits: types.HasOnlyDigits = str => /^[0-9]*$/ig.test(str);

const yearIsLessThanCurrent: types.YearIsLessThanCurrent = str => {
    const date = new Date(str).getTime();
    const currentDate = Date.now();
    return date <= currentDate && str.length === 10;
};

const isEmpty: types.IsEmpty = str => str.trim().length === 0;

export {
    hasOnlyDigits,
    yearIsLessThanCurrent,
    isEmpty
};
