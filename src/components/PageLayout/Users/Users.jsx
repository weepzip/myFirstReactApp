import React from 'react';
import User from './User/User';
import s from './Users.module.css';
import axios from 'axios';
import Preloader from '../../common/Preloader/Preloader';

class Users extends React.Component {

  componentDidMount() {
    this.props.toggleLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`, {
      withCredentials: true,
    })
          .then(response => {
            this.props.toggleLoading(false);
            this.props.showMoreUsers( response.data.items );
            this.props.setTotalUsersCount( response.data.totalCount );
          });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleLoading(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`, {
      withCredentials: true,
    })
          .then(response => {
            this.props.toggleLoading(false);
            this.props.showMoreUsers( response.data.items );
            this.props.setTotalUsersCount( response.data.totalCount );
          });
  }

  render() {
    let pageCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.pageSize);

    let pages = [];
    for (let i = 1; i <= 10; i++) {
      pages.push(i);
    };

    if (this.props.state.users.length > 0) {
      this.userElements = this.props.state.users.map((user) => {
        return (
          <User
            key={user.id}
            user={{ ...user }}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        );
      });
    };
    /* headers: {
      'API-KEY': "66046d9a-fafc-4a1e-85d0-71f99c8c85a6"
    } */
    
    if (this.props.state.isLoading) {
      return <Preloader/>
    } else {
      return (
        <div className={s.users_layout}>
          <div className={s.pagination_container}>
            { (this.props.state.currentPage > 1)
                ? <span className={s.pagination}
                    onClick={ () => this.onPageChanged(this.props.state.currentPage-1) }
                  >Previous</span>
                : <span/>
            }

            { (this.props.state.currentPage > 10)
                ? <span className={s.pagination}
                    onClick={ () => this.onPageChanged(this.props.state.currentPage - 10)   }
                  >
                    { this.props.state.currentPage - 10 }
                  </span>
                : <span/>
            }

            <span className={`${s.pagination} ${s.selected}`}>
              {this.props.state.currentPage}
            </span>

            { (this.props.state.currentPage + 10 < pageCount)
                ? <span className={s.pagination}
                    onClick={ () => this.onPageChanged(this.props.state.currentPage + 10) }
                  >
                    { this.props.state.currentPage + 10 }
                  </span>
                : <span/>
            }
            
            { (this.props.state.currentPage < pageCount)
                ? <span className={s.pagination}
                    onClick={ () => this.onPageChanged(this.props.state.currentPage+1) }
                  >Next</span>
                : <span/>
            }

            <span className={s.pagination}
              onClick={ () => this.onPageChanged(pageCount) }
            >
              { pageCount }
            </span>
          </div>
          { this.userElements }
        </div>
      )
    }
  }
}

export default Users;