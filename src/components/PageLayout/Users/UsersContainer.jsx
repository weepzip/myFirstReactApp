import {connect} from 'react-redux';
import { setTotalUsersCount, setCurrentPage, followUser, showMoreUsers, unfollowUser, toggleLoading } from '../../../redux/usersReduser';
import Users from './Users';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    state: state.usersPage,
  };
};

const UsersContainer = connect(mapStateToProps, {
  followUser,
  unfollowUser,
  showMoreUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleLoading
})( withRouter(Users) );

export default UsersContainer;