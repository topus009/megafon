import {Reducer} from 'redux';
import app from './app';

import * as types from '../types';

const reducer: Reducer<types.AppState> = app;

export default reducer;
