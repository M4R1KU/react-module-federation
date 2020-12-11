import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

const RollingReact = React.lazy(() => import('app2/RollingReact'))

ReactDOM.render(
  <AppContainer>
    <h1>I am app 1</h1>
    <React.Suspense fallback="Loading RollingReact...">
      <RollingReact/>
    </React.Suspense>
  </AppContainer>,
  document.getElementById('root')
);
