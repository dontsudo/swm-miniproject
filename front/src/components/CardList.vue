<template>
  <div>
    <SortToggle />
    <Spinner v-if="loading" />
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="posts" class="pb-3">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/post";

import PostCard from "./PostCard.vue";
import CardSkeleton from "./CardSkeleton.vue";
import Spinner from "./Spinner.vue";
import SortToggle from "./SortToggle.vue";

export default {
  components: { PostCard, CardSkeleton, Spinner, SortToggle },
  setup() {
    const post = usePostStore();
    const { posts, loading, error } = storeToRefs(post);
    const { getPosts, hasMorePost } = post;

    getPosts();

    return {
      posts,
      loading,
      error,
      hasMorePost,

      getPosts,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 500
      ) {
        if (this.hasMorePost) {
          this.getPosts();
        }
      }
    },
  },
};
</script>

<style></style>
