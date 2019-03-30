import _ from 'lodash';
import {isError} from '../../src/helpers/userErrorValidation';

const fieldWithValues = {
    fio: 'ascascasca',
    mainPhone: 6512333057,
    workPhone: '5165533',
    dateOfBirth: '2019.12.03'
};

const fieldResults = {
    fio: false,
    mainPhone: false,
    workPhone: false,
    dateOfBirth: true
};

const unknownFieldsWithValues = {
    x: 'ascascasca',
    y: 6512333057
};

test('isError', () => {
    _.each(fieldWithValues, (value, key) => {
        expect(isError({value, key})).toEqual({key, error: fieldResults[key]});
    });
    _.each(unknownFieldsWithValues, (value, key) => {
        expect(isError({value, key})).toEqual({key, error: false});
    });
});
