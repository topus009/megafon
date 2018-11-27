import moment from 'moment';
import {
    hasOnlyDigits,
    yearIsLessThanCurrent,
    isEmpty
} from '../../src/helpers/common';

test('hasOnlyDigits', () => {
    expect(hasOnlyDigits('ascascac')).toBe(false);
    expect(hasOnlyDigits('ascascac34345')).toBe(false);
    expect(hasOnlyDigits('34345')).toBe(true);
});

test('yearIsLessThanCurrent', () => {
    const currentDate = moment();
    const earlyDate = currentDate.subtract(5, 'd').format('YYYY.MM.DD');
    const lateDate = currentDate.add(10, 'd').format('YYYY.MM.DD');
    expect(yearIsLessThanCurrent(earlyDate)).toBe(true);
    expect(yearIsLessThanCurrent(lateDate)).toBe(false);
});

test('hasOnlyDigits', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('ascascac34345')).toBe(false);
});
