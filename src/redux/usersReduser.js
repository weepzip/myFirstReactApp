const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_LOADING = "TOGGLE_LOADING";

/* const initialState = {
  users: [
    {
      id: 1,
      firstName: "Oleg",
      surname: "Kernitsky",
      status: "Hallo",
      country: "Russia",
      city: "Moscow",
      isFollow: true,
      imgLink: "https://img2.goodfon.ru/original/320x240/0/ac/koshka-lezhit-trava-listya-kot.jpg",
    },
    {
      id: 2,
      firstName: "Vadim",
      surname: "Bezrukov",
      status: "I'm here",
      country: "Russia",
      city: "Tagil",
      isFollow: false,
      imgLink: "https://st28.stblizko.ru/images/product/419/625/391_medium.jpg",
    },
    {
      id: 3,
      firstName: "Vladislav",
      surname: "Tsyplenkov",
      status: ":)",
      country: "Russia",
      city: "Electrostal",
      isFollow: true,
      imgLink: "https://aloha-plus.ru/wp-content/uploads/2016/12/IMG_6469.jpg",
    },
    {
      id: 4,
      firstName: "Boris",
      surname: "Elcin",
      status: "USSR is great",
      country: "Russia",
      city: "Moscow",
      isFollow: false,
      imgLink: "https://i08.fotocdn.net/s119/924eeab14ff127d5/gallery_m/2731909672.jpg",
    },
    {
      id: 5,
      firstName: "Natalia",
      surname: "Koryakina",
      status: "live is beautyful",
      country: "Russia",
      city: "Krasavino",
      isFollow: true,
      imgLink: "https://i.ytimg.com/vi/KrhnnPdp4Ng/hqdefault.jpg",
    },
    {
      id: 6,
      firstName: "Vladislav",
      surname: "Muzhikov",
      status: "go to chat",
      country: "Russia",
      city: "Yaroslavl",
      isFollow: true,
      imgLink: "https://sun9-55.userapi.com/impf/0iUSZlZzIAO8dzkmOV78N-AXNk5oPzjaimbUDg/Uo8o1wm83Jk.jpg?size=200x150&quality=96&sign=b0bf7c24e0a98f40aaa11af77cd61d2e&type=album",
    },
  ],
}; */

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  pageNumber: 0,
  isLoading: true,
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case (FOLLOW_USER): {
      let stateCopy = {
        ...state,
        users: state.users.map( (user) => {
          if (user.id === action.id) {
            return {
              ...user,
              followed: true,
            };
          };
          return user;
        } )
      };
      return stateCopy;
    };
    case (UNFOLLOW_USER): {
      let stateCopy = {
        ...state,
        users: state.users.map( (user) => {
          if (user.id === action.id) {
            return {
              ...user,
              followed: false,
            };
          };
          return user;
        } )
      };
      return stateCopy;
    };
    case (SET_USERS): {
      let stateCopy = {
        ...state,
        users: [...action.users]
      };
      return stateCopy;
    };
    case (SET_CURRENT_PAGE): {
      let stateCopy = {
        ...state,
        currentPage: action.currentPage,
      };
      return stateCopy;
    };
    case (SET_TOTAL_USERS_COUNT): {
      let stateCopy = {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
      return stateCopy;
    }
    case (TOGGLE_LOADING): {
      let stateCopy = {
        ...state,
        isLoading: action.isLoading,
      };
      return stateCopy;
    }
    default: return state;
  }
}

export const followUser = (id) => {
  return {
    type: FOLLOW_USER,
    id: id,
  }
}

export const unfollowUser = (id) => {
  return {
    type: UNFOLLOW_USER,
    id: id,
  }
}

export const showMoreUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
}

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  }
}

export const toggleLoading = (isLoading) => {
  return {
    type: TOGGLE_LOADING,
    isLoading,
  }
}

export default usersReduser;