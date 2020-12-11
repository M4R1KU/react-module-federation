import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const RollingReact = React.lazy(() => import('app2/RollingReact'))

ReactDOM.render(
  <React.StrictMode>
    <App>
      <h1>I am app 1</h1>
      <React.Suspense fallback="Loading RollingReact...">
        <RollingReact/>
      </React.Suspense>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
