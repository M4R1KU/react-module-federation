import React from 'react';
import ReactDOM from 'react-dom';
import RollingReact from './RollingReact';

const AppContainer = React.lazy(() => import('app1/AppContainer'))

ReactDOM.render(
  <React.Suspense fallback='Loading Toolbar...'>
    <AppContainer>
      <h1>I am app 2</h1>
      <RollingReact/>
    </AppContainer>
  </React.Suspense>,
  document.getElementById('root')
);
