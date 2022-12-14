<template>
  <PostForm @submit="savePost($event)" />
</template>
<script>
import PostForm from "@/components/admin/PostForm";
import axios from "axios";
export default {
  components: {
    PostForm,
  },
  methods: {
    savePost(post) {
      axios
        .post(
          "https://newspaper-column-default-rtdb.firebaseio.com/posts.json",
          post,
        )
        .then((res) => {
          console.log(res);
          this.$router.push("/admin");
        });
    },
  },
};
</script>
