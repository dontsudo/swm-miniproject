<template>
  <div :class="{ shake: disabled }" class="pt-2" @click="onLikeClicked">
    <svg
      class="animate-bounce"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
      />
    </svg>
    <div class="text-center mt-5">
      {{ likes }}
    </div>
  </div>
</template>

<script>
import { usePostStore } from "../stores/post";

export default {
  props: ["id", "likes"],
  data() {
    return {
      disabled: false,
    };
  },
  setup() {
    const post = usePostStore();
    const { likePost } = post;

    return {
      likePost,
    };
  },
  methods: {
    onLikeClicked() {
      this.likePost(this.id);

      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 1000);
    },
  },
};
</script>

<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  0% {
    fill: black;
  }
  100% {
    fill: red;
  }

  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
