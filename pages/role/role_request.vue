<template>
  <br />
  <br />
  <br />

  <div>
    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        role request page
      </h5>
      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Stay up to date and move work forward with Flowbite on iOS & Android. Download the
        app today.
      </p>
      <ul>
        <li v-for="(item, index) in data" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useTokenStore } from "@/stores/token";
import axios from "axios";

definePageMeta({
  middleware: "auth",
  // or middleware: 'auth'
});
export default {
  data() {
    return {
      data: [],
      errors: [],
    };
  },
  
  mounted() {
    try {
      let token = useTokenStore();
      axios
        .get("http://127.0.0.1:8000/api/role_permissions", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.getToken}`,
          },
        })
        .then((response) => {
          this.data = response.data;
          console.log("permissions", this.data);
        });
    } catch (error) {
      this.errors.push(error);
      throw error;
    }
  },
};
</script>

//
<script setup>
//   const auth = useAuthStore();
//   const token = useTokenStore();
//   const data = [];

//   const errors = ref([]) ;

//   try {
//   const res = $fetch('http://127.0.0.1:8000/api/role_permissions', {
//     method: 'GET',
//     headers: {
//       Accept: "application/json",
//       authorization: `Bearer ${token.getToken}`,

//     },

//   });

//   console.log('permissions', res);

// } catch (error) {
//   throw error;
// }

// //alert('oky');

//
</script>

<style lang="scss" scoped></style>
