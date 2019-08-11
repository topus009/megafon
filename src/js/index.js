import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Megafon from './containers/Megafon';
import ErrorBoundary from './hoc/ErrorBoundary';

const ROOT = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <ErrorBoundary>
      <Megafon />
    </ErrorBoundary>
  </AppContainer>,
  ROOT
);
