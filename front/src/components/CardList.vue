<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="posts">
      <PostCard v-for="post in posts" v-bind:key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostCard from "./PostCard.vue";

export default {
  components: { PostCard },
  data() {
    return {
      loading: false,
      posts: [],
      error: null,
    };
  },
  created() {
    this.fetchData(1, 10);
  },
  methods: {
    fetchData(page, pageSize) {
      this.error = this.posts = null;
      this.loading = true;
      axios
        .get("/api/posts", {
          params: {
            sort: "id:desc",
            "pagination[page]": page,
            "pagination[pageSize]": pageSize,
          },
        })
        .then(({ data }) => {
          this.loading = false;
          this.posts = data.data.map((post) => ({
            id: post.id,
            ...post.attributes,
          }));
        })
        .catch((err) => {
          this.error = err.toString();
        });
    },
  },
};
</script>

<style></style>
