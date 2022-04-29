<template>
  <section class="flex justify-center align-middle font-sans">
    <div
      class="w-5/6 flex flex-col bg-gray-100 rounded-lg border border-gray-200 shadow-md hover:bg-white p-12 my-5"
    >
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
      if (diffHour < 60) return `${diffHour}시 전`;

      const diffDay = Math.floor(diffHour / 24);
      if (diffDay < 365) return `${diffDay}일 전`;

      const diffYear = Math.floor(diffDay / 365);
      return `${diffYear}년 전`;
    },
  },
};
</script>

<style></style>
