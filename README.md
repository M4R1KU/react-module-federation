# React Module Federation

## Getting started

1. Install dependencies  
   ```bash
   yarn
   ```
2. Run build  
   ```bash
   yarn run build
   ```
3. Start serving  
   ```bash
   yarn run serve
   ```
4. Go to http://localhost:3000 and http://localhost:3001

## What does it do?

The project demonstrates the bi-directional functionality of webpack module federation. It contains two apps which both
depend on each other. App 1 provides a toolbar and App 2 exposes a dummy application component which just shows an
animation.

They both load the respective remote component and display the same app with the difference of a simple title.

### App 1 Plugin Config
```js
new ModuleFederationPlugin({
    ...,
    remotes: {
      'app2': 'app2'
    },
    exposes: {
      './App': './app1/App.js'
    }
})
```

### App 2 Plugin Config
```js
new ModuleFederationPlugin({
    ...,
    remotes: {
      'app1': 'app1'
    },
    exposes: {
      './RollingReact': './app2/RollingReact.js'
    }
})
```
