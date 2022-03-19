import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import sidebarReduser from "./sidebarReduser";

let store = {
  _state: {
    profilePage: {
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
      newPostText: 'Hallo'
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },

  _callSubscriber(state) {
    console.log("rerendered")
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReduser(this.getState().profilePage, action);
    this._state.dialogsPage = dialogsReduser(this.getState().dialogsPage, action);
    this._state.sidebar = sidebarReduser(this.getState().sidebar, action);
    this._callSubscriber(this.getState());
  },
}

export default store;