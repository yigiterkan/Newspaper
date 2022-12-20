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
      addPost(state, post) {
        state.fetchedPosts.push(post);
      },
      updatePost(state, editedPost) {
        let post_index = state.fetchedPosts.findIndex(
          (post) => post.id == editedPost.id,
        );

        state.fetchedPosts[post_index] = editedPost;
      },
      deletePost(state, post) {
        let selectedPost = state.fetchedPosts.findIndex(
          (p) => p.id === post.id,
        );

        state.fetchedPosts.splice(selectedPost, 1);
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
      addPost(vuexContext, post) {
        return axios
          .post(
            "https://newspaper-column-default-rtdb.firebaseio.com/posts.json",
            post,
          )
          .then((res) => {
            vuexContext.commit("addPost", { ...post, id: res.data.name });
          });
      },
      updatePost(vuexContext, editedPost) {
        return axios
          .put(
            "https://newspaper-column-default-rtdb.firebaseio.com/posts/" +
              editedPost.id +
              ".json",
            editedPost,
          )
          .then((response) => {
            vuexContext.commit("updatePost", editedPost);
          })
          .catch((e) => console.log(e));
      },
      deletePost(vuexContext, post) {
        return axios
          .delete(
            "https://newspaper-column-default-rtdb.firebaseio.com/posts/" +
              editedPost.id +
              ".json",
            post,
          )
          .then((response) => {
            vuexContext.commit("deletePost", post);
          });
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
