<template>
  <div>
    <Spinner v-if="loading" />
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="posts">
      <PostCard v-for="post in posts" v-bind:key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/post";

import PostCard from "./PostCard.vue";
import CardSkeleton from "./CardSkeleton.vue";
import Spinner from "./Spinner.vue";

export default {
  components: { PostCard, CardSkeleton, Spinner },
  setup() {
    const post = usePostStore();
    const { posts, loading, error } = storeToRefs(post);
    const { getPosts } = post;

    getPosts(1, 10);

    return {
      posts,
      loading,
      error,

      getPosts,
    };
  },
};
</script>

<style></style>
