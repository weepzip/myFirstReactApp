const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const TOGGLE_LOADING = "TOGGLE_LOADING";

let initiationState = {
  newMessageText: "NewMessage",
  dialogs: [
    {id: 1, name: "Oleg", imgLink: "https://img2.goodfon.ru/original/320x240/0/ac/koshka-lezhit-trava-listya-kot.jpg"},
    {id: 2, name: "Vlad", imgLink: "https://st28.stblizko.ru/images/product/419/625/391_medium.jpg"},
    {id: 3, name: "Victor", imgLink: "https://aloha-plus.ru/wp-content/uploads/2016/12/IMG_6469.jpg"},
    {id: 4, name: "Olya", imgLink: "https://i08.fotocdn.net/s119/924eeab14ff127d5/gallery_m/2731909672.jpg"},
    {id: 5, name: "Sasha", imgLink: "https://i.ytimg.com/vi/KrhnnPdp4Ng/hqdefault.jpg"}
  ],
  messages: [
    {id: 1, user_id: 4, message: "What's up?"},
    {id: 2, user_id: 2, message: "Hi"},
    {id: 3, user_id: 1, message: "I'm a superman"},
    {id: 4, user_id: 3, message: "Hallo"},
    {id: 5, user_id: 5, message: "Yo"},
    {id: 6, user_id: 2, message: "Yep"},
    {id: 7, user_id: 1, message: "Damn, man!"},
    {id: 8, user_id: 4, message: "Cringe"},
    {id: 9, user_id: 5, message: "vajeflv"},
  ],
  isLoading: true,
};

const dialogsReduser = (state = initiationState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      let stateCopy = {...state};
      if (state.newMessageText === '') return stateCopy;
      let message = {
        id: 10,
        user_id: 1,
        message: stateCopy.newMessageText, 
      };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(message);
      stateCopy.newMessageText = "";
      return stateCopy;
    };
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state};
      stateCopy.newMessageText = action.text;
      return stateCopy;
    };
    case TOGGLE_LOADING: {
      let stateCopy = {
        ...state,
        isLoading: action.isLoading,
      };
      return stateCopy;
    };
    default: return state;
  }
}

export const addNewMessageActionCreater = () => {
  return { type: ADD_NEW_MESSAGE }
};

export const updateNewMessageTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text,
  }
};

export const toggleLoading = (isLoading) => {
  return {
    type: TOGGLE_LOADING,
    isLoading,
  }
}

export default dialogsReduser;