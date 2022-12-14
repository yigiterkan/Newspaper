import Vuex from "vuex";

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
        vuexContext.commit("setPosts", [
          {
            id: 1,
            title: "Donec ac odio ",
            subTitle: "Tempor Orci. ",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
            author: "Sem Fringilla",
          },
          {
            id: 2,
            title: "Cras",
            subTitle: "Pulvinar",
            text: "Temporibus quaerat adipisci praesentium, voluptas perspiciatis voluptatem nam alias aliquam ipsa sit ducimus tempore sapiente possimus distinctio quae molestiae et sequi fugit!",
            author: "Ultricies Leo",
          },
        ]);
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
