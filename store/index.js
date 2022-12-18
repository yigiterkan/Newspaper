import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            "https://newspaper-column-default-rtdb.firebaseio.com/posts.json",
          )
          .then((response) => {
            let data = response.data;
            let postArray = [];
            for (let key in data) {
              postArray.push({ id: key, ...data[key] });
            }
            vuexContext.commit("setPosts", postArray);
          });
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      getPosts(state) {
        return state.fetchedPosts;
      },
    },
  });
};

export default createStore;
