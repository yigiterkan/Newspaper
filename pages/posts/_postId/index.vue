<template>
  <PostDetail :post="fetchedPost" />
</template>
<script>
import PostDetail from "@/components/post/PostDetail";

export default {
  components: {
    PostDetail,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: {
          id: "1",
          title: "Lorem ipsum... ID(" + context.params.postId + ")",
          subTitle: "Lorem ipsum dolor sit amet,",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consequuntur, corporis debitis dolorem esse est eum exercitationem in iure libero necessitatibus nobis nulla qui quis quod, ratione reiciendis repellat!",
          author: "Ultricies Leo",
        },
      });
    }, 1500);
  },
};
</script>
