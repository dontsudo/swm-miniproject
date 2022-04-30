<template>
  <section
    class="flex justify-center align-middle bg-gray-100 border border-gray-200 shadow-md font-sans"
  >
    <div class="w-1/12 flex justify-center items-center">
      <LikeButton :id="post.id" :likes="post.likes" />
    </div>
    <div class="w-11/12 flex flex-col py-12 pr-12">
      <div class="flex justify-between align-bottom mb-6">
        <h4 class="text-2xl uppercase">{{ post.id }}번째 방명록</h4>
        <h5 class="tracking-wide text-gray-500">
          {{ post.username }} • {{ fromNow(post.createdAt) }}
        </h5>
      </div>
      <span class="font-normal text-lg text-gray-700">
        {{ post.content }}
      </span>
    </div>
  </section>
</template>

<script>
import LikeButton from "./LikeButton.vue";
export default {
  props: ["post"],
  methods: {
    fromNow(dateString) {
      const date = new Date(dateString);
      const now = Date.now();

      const diffSecond = Math.floor((now - date.getTime()) / 1000);
      if (diffSecond < 60) return `${diffSecond}초 전`;
      const diffMinute = Math.floor(diffSecond / 60);
      if (diffMinute < 60) return `${diffMinute}분 전`;
      const diffHour = Math.floor(diffMinute / 60);
      if (diffHour < 60) return `${diffHour}시간 전`;
      const diffDay = Math.floor(diffHour / 24);
      if (diffDay < 365) return `${diffDay}일 전`;
      const diffYear = Math.floor(diffDay / 365);
      return `${diffYear}년 전`;
    },
  },
  components: { LikeButton },
};
</script>

<style></style>
