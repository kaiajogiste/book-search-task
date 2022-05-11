import React from 'react';

import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import store, {history} from './configureStore';

import Footer from './component/Footer.js';

import routes from './routes';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="app">
          <Footer/>
          <main>
            {routes}
          </main>
          <Footer/>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
