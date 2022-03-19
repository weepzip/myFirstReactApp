import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe( () => renderEntireTree(store.getState()) );

reportWebVitals();
