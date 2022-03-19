import React from 'react';
import s from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx'
import PageLayout from './components/PageLayout/PageLayout.jsx';
import {BrowserRouter} from 'react-router-dom';

function App(props) {
  return (
    <div className={s.App}>
      <BrowserRouter>
        <HeaderContainer 
          state={props.state}
        />
        <PageLayout
          state={props.state}
          dispatch={props.dispatch}
          store={props.store}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;