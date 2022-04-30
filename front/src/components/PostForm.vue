<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-6">
      <label for="username" class="block mb-2 text-sm font-medium"
        >재치있는 이름을 적어보세요!</label
      >
      <input
        id="username"
        v-model="username"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="ex) 13기 코딩왕"
        required
      />
    </div>

    <div class="mb-6">
      <label for="content" class="block mb-2 text-sm font-medium"
        >여러분의 이야기를 남겨보세요!</label
      >
      <textarea
        id="content"
        v-model="content"
        class="block p-2.5 w-full resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="하고 싶은 말을 적어주세요 👏 (삭제 기능 없습니다!)"
        rows="6"
        minlength="5"
        maxlength="300"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      기록하기
    </button>
  </form>
</template>

<script>
import { usePostStore } from "../stores/post";

export default {
  data() {
    return {
      username: "",
      content: "",
    };
  },
  setup() {
    const post = usePostStore();
    const { createPost, getPosts } = post;

    return {
      createPost,
      getPosts,
    };
  },
  methods: {
    onSubmit() {
      this.createPost(this.username, this.content);

      this.username = "";
      this.content = "";
    },
  },
};
</script>

<style></style>
