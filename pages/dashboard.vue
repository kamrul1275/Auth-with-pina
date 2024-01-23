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

      <!-- {{ auth.getUser.role.permissions }}  -->


      <!-- name:{{ auth.getUser.name }}   <br> <br>
        email:{{ auth.getUser.email }} -->

      <br>
     





      <hr>
       {{ permission1 }}


      <!-- <button
      type="submit" @click.prevent="token.removeToken()"
      class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      resetToken
    </button> -->


    </div>
  </div>
</template>

<script setup>
import permission from '~/middleware/permission';




definePageMeta({
  middleware: 'auth'
  // or middleware: 'auth'
});

const auth = useAuthStore();
// const token = useTokenStore();

const permission1 = computed(() => {
  console.log(auth.getPermission);
  return auth.getPermission['/dashboard'];
});



// login




</script>

<style lang="scss" scoped></style>