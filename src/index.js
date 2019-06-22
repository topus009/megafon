// import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Megafon from './containers/Megafon';

const ROOT = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Megafon />
  </AppContainer>,
  ROOT
);
