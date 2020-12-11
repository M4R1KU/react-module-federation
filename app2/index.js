import React from 'react';
import ReactDOM from 'react-dom';
import RollingReact from './RollingReact';

const App = React.lazy(() => import('app1/App'))

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback='Loading Toolbar...'>
      <App>
        <h1>I am app 2</h1>
        <RollingReact/>
      </App>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
