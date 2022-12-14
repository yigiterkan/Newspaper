<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPosts: [
          {
            id: 1,
            title: "NuxtJS",
            subTitle: "Ilk NuxtJS projesi",
            text: "Bu proje nuxtJs bootstrap vs kullanilarak yapilmistir:)",
            author: "Yigit Erkan",
          },
          {
            id: 2,
            title: "NextJS",
            subTitle: "Ilk NextJS projesi için içerik",
            text: "Bir sonraki projeyi NextJS ile yapmayı dusunuyorum :)",
            author: "Yigit Cumhur Erkan",
          },
        ],
      });
    }, 2000);
  },
};
</script>
<style scoped></style>
