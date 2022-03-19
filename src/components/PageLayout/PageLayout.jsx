import React from 'react';
import PageSideBar from './PageSideBar/PageSideBar.jsx';
import ProfileContainer from './Profile/ProfileContainer.jsx';
import Dialogs from './Dialogs/Dialogs.jsx';
import s from './PageLayout.module.css';
import {Route} from 'react-router-dom';
import UsersContainer from './Users/UsersContainer.jsx';


function PageLayout(props) {
  return (
    <React.Fragment>
      <div id={s.page_layout}>
        <div className={s.sidebar}>
          <PageSideBar 
            state={props.state.auth}
          />
        </div>
        <div className={s.page_body}>
          <Route
            path="/profile/:userId?"
            render={() => {
              return (
                <ProfileContainer
                  state={props.state}
                />
              );
            }}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                store={props.store}
              />
            )}
          />
          <Route
            path="/users"
            render={() => (
              <UsersContainer 
                state={props.state}
              />
            )}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default PageLayout;