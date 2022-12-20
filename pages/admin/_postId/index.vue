<template>
  <PostForm @submit="update($event)" :is-update="true" :post="fetchedPost" />
</template>
<script>
import PostForm from "@/components/admin/PostForm";
import axios from "axios";

export default {
  components: {
    PostForm,
  },
  asyncData(context) {
    return axios
      .get(
        "https://newspaper-column-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json",
      )
      .then((response) => {
        return {
          fetchedPost: response.data,
        };
      });
  },
  methods: {
    updatePost(editedPost) {
      this.$store
        .dispatch("updatePost", {
          ...editedPost,
          id: this.$route.params.postId,
        })
        .then((response) => {
          this.$router.push("/admin");
        });
    },
    deletePost(deletedPost) {
      this.$store
        .dispatch("deletePost", {
          ...deletedPost,
          id: this.$route.params.postId,
        })
        .then((response) => {
          this.$router.push("/admin");
        });
    },
  },
};
</script>
