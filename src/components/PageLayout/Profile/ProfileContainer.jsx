import Profile from "./Profile";
import React from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import { addPost, updateNewPostText, setUserProfile, toggleLoading } from '../../../redux/profileReduser';
import { withRouter } from "react-router-dom";
import Preloader from '../../common/Preloader/Preloader';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId =  (!this.props.match.params.userId) ? this.props.auth.userId : this.props.match.params.userId;
    this.props.toggleLoading(true);
    if (!this.props.auth.isAuthing && userId) this.getUserInfo(userId);
  }

  getUserInfo(userId) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.setUserProfile(response.data);
        this.props.toggleLoading(false);
      });
  }

  render() {
    if (this.props.state.profilePage.isLoading) {
      return (
        <Preloader/>
      );
    } else {
      return (
        <Profile {...this.props} />
      )
    }
  };
};

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    auth: state.auth,
  }
};

export default connect( mapStateToProps, {
  addPost, 
  updateNewPostText, 
  setUserProfile,
  toggleLoading,
})( withRouter(ProfileContainer) );