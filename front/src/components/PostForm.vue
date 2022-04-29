<template>
  <form>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium"
        >재치있는 이름을 적어보세요!</label
      >
      <input
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="ex) 13기 코딩왕"
        required
      />
    </div>
    <div class="mb-6">
      <label for="message" class="block mb-2 text-sm font-medium"
        >여러분의 이야기를 남겨보세요!</label
      >

      <textarea
        id="message"
        rows="6"
        class="block p-2.5 w-full resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="하고 싶은 말을 적어주세요 👏"
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
export default {};
</script>

<style></style>
