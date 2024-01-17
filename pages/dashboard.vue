<template>

<br>
<br>
<br>

<div>
    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome Dashboard</h5>
      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with
        Flowbite on iOS & Android. Download the app today.</p>

        name:{{ auth.getUser.id }}   <br> <br>
        name:{{ auth.getUser.name }}   <br> <br>
        email:{{ auth.getUser.email }}


        {{ token.getStatus }}
    </div>
</div>

</template>

<script setup>



definePageMeta({
  middleware: 'auth'
  // or middleware: 'auth'
})

const auth = useAuthStore();
const token = useTokenStore();

</script>

<style lang="scss" scoped>

</style>