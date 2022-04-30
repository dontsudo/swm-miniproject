<template>
  <div class="flex items-center justify-end m-8">
    <label for="checked" class="flex items-center cursor-pointer">
      <div class="relative">
        <input v-model="checked" id="checked" type="checkbox" class="sr-only" />
        <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div
          class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
        ></div>
      </div>
      <div class="ml-3 text-gray-700 font-medium">인기글 보기</div>
    </label>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  setup() {
    const post = usePostStore();
    const { sortByLike } = storeToRefs(post);
    const { toggleSortByLike } = post;

    return {
      sortByLike,

      toggleSortByLike,
    };
  },
  computed: {
    checked: {
      get() {
        return this.sortByLike;
      },
      set(value) {
        this.toggleSortByLike(value);
      },
    },
  },
};
</script>

<style>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: rgb(255, 255, 255);
}
</style>
