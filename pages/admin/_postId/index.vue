<template>
  <PostForm :is-update="true" :post="loadedPost" />
</template>
<script>
import PostForm from "@/components/admin/PostForm";

export default {
  components: {
    PostForm,
  },
  data() {
    return {
      loadedPost: {
        id: 1,
        title: "Cumhur",
        subTitle: "Yigit",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        author: "Yigit Erkan",
      },
    };
  },
};
</script>
