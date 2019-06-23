import _ from 'lodash';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import constants from '../../src/constants/App';
import * as actions from '../../src/actions/AppActions';
import { dbPrefix } from '../../config.local';
import reducer, { initialState } from '../../src/reducers/app';
import { checkApiRunning, flushAllPromises } from '../testHelpers';

const {
  // sync
  SAVEUSERTOSTORE,
  SETERROR,
  // async
  PENDING,
  DELETEUSER,
} = constants;

const {
  // sync
  saveUserToStore,
  setError,
  // async
  deleteUser,
} = actions;

let users;
let firstUserId;
let expectedUsers;

beforeAll(async done => {
  users = await checkApiRunning();
  firstUserId = users[0]._id;
  expectedUsers = _.filter(users, user => user._id !== firstUserId);
  done();
});

test('work fine SAVEUSERTOSTORE', () => {
  const user = {
    fio: 'ascascasca',
    mainPhone: 6512333057,
    workPhone: '5165533',
    dateOfBirth: '2018.12.01',
  };
  const expectedAction = {
    type: SAVEUSERTOSTORE,
    payload: user,
  };
  expect(saveUserToStore(user)).toEqual(expectedAction);
});

test('work fine SETERROR', () => {
  const data = {
    key: 'fio',
    value: 'asdasd',
  };
  const expectedAction = {
    type: SETERROR,
    payload: {
      key: 'fio',
      error: false,
    },
  };
  expect(setError(data)).toEqual(expectedAction);
});

test('work fine PENDING', () => {
  expect(reducer({}, { type: PENDING })).toEqual({ loading: true });
});

test('Api + async action DELETEUSER', async () => {
  const httpMock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  const currentState = { ...initialState, users };
  const store = mockStore(currentState);
  const expectedActions = [{ type: PENDING }, { type: DELETEUSER, payload: expectedUsers }];
  httpMock.onDelete(`${dbPrefix}/contacts/${firstUserId}`).reply(200, expectedUsers);
  deleteUser(firstUserId)(store.dispatch);
  await flushAllPromises();
  const currentActions = store.getActions();
  const recievedUsers = _.find(currentActions, { type: DELETEUSER }).payload;
  expect(currentActions).toEqual(expectedActions);
  expect(users.length - recievedUsers.length === 1).toBe(true);
});

test('Api + async reducer DELETEUSER', () => {
  const expectedState = {
    ...initialState,
    loading: false,
    users: expectedUsers,
  };
  const action = { type: DELETEUSER, payload: expectedUsers };
  expect(reducer(undefined, action)).toEqual(expectedState);
});
