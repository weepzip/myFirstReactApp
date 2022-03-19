const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_LOADING = "TOGGLE_LOADING";

let initiationState = {
  pageInfo: {
    userName: "Koryakin Vladislav",
    birthday: "02.04.1999",
    city: "Krasavino",
    currentCity: "Moscow",
    education: "MSUGC",
    website: "www.weepzip.com",
  },
  posts: [
    {
      author: "Koryakin Vladislav",
      post: "Hello, World! This is my first post. Good luck and have fun!",
    },
    {
      author: "Koryakin Vladislav",
      post: "I like this site",
    }
  ],
  newPostText: 'Hallo',
  profile: null,
  isLoading: true,
};

const profileReduser = (state = initiationState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let stateCopy = {...state};
      if (state.newPostText === '') return stateCopy;
      let newPost = {
        author: "Vladislav Koryakin",
        post: state.newPostText,
      };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    };
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.text;
      return stateCopy;
    };
    case SET_USER_PROFILE: {
      let stateCopy = {
        ...state,
        profile: action.profile
      };
      return stateCopy;
    };
    case TOGGLE_LOADING: {
      let stateCopy = {
        ...state,
        isLoading: action.isLoading
      };
      return stateCopy;
    }
    default: return state;
  }
}

export const addPost = () => {
  return {type: ADD_NEW_POST}
};

export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  }
}

export const toggleLoading = (isLoading) => {
  return {
    type: TOGGLE_LOADING,
    isLoading: isLoading,
  }
}

export default profileReduser;