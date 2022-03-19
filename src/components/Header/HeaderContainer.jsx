import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthingProcess } from '../../redux/authReduser.js';
import Header from './Header.jsx';
import { withRouter } from 'react-router-dom';

class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.setAuthingProcess(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
      .then( response => {
        if(response.data.resultCode === 0) {
          let {id, login, email} = response.data.data;
          this.props.setAuthUserData(id, login, email);
        }
        this.props.setAuthingProcess(false);
      })
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {setAuthUserData, setAuthingProcess})( withRouter(HeaderComponent) );