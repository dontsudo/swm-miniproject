<template>
  <div>
    <header
      class="fixed top-0 w-1/3 h-full hidden lg:flex flex-col justify-between bg-blue-500 text-white p-16"
    >
      <div class="heading">
        <h1 class="text-8xl font-normal leading-normal">소대숲</h1>
        <h3 class="text-3xl font-normal my-4">여러분의 이야기를 남겨보세요!</h3>
      </div>

      <div class="bottom">
        <PostForm class="mb-24" />
        <p class="text-lg font-medium"></p>
        <nav class="w-4/5">
          <ul class="flex flex-wrap">
            <li
              class="mr-4 cursor-pointer text-black opacity-50 hover:opacity-100"
            >
              <a href="https://www.swmaestro.org/">SW Maestro</a>
            </li>
            <li
              class="mr-4 cursor-pointer text-black opacity-50 hover:opacity-100"
            >
              Created by Team 2
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <header
      class="flex flex-col lg:hidden justify-between bg-blue-500 text-white p-16"
    >
      <div class="heading">
        <h1 class="text-8xl font-normal leading-normal">소대숲</h1>
        <h3 class="text-3xl font-normal my-4">여러분의 이야기를 남겨보세요!</h3>
      </div>

      <div class="bottom">
        <PostForm class="mb-24" />
        <p class="text-lg font-medium"></p>
        <nav class="w-4/5">
          <ul class="flex flex-wrap">
            <li
              class="mr-4 cursor-pointer text-black opacity-50 hover:opacity-100"
            >
              <a href="https://www.swmaestro.org/">SW Maestro</a>
            </li>
            <li
              class="mr-4 cursor-pointer text-black opacity-50 hover:opacity-100"
            >
              Created by Team 2
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import PostForm from "./PostForm.vue";
export default { components: { PostForm } };
</script>
