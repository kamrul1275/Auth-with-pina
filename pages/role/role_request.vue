<template>
  <br />
  <br />

  <div>
    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        role request page
      </h5>

      <form class="max-w-sm mx-auto">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Select role</label
        >
        <select
          
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option v-for="(role, index) in roles" :key="index">{{ role.name }}</option>
        

        </select>

         <!-- {{ roles }} -->

        <button
          type="submit"
          @click.prevent="Submite()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Stay up to date and move work forward with Flowbite on iOS & Android. Download the
        app today.
      </p>
      <ul>
        <li v-for="(item, index) in data" :key="index">
          {{ item }}
        </li>
      </ul>

      <br />
      <br />
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

    // start role request
    const auth = useAuthStore();
    const token = useTokenStore();
    try {
      const roles = $fetch("http://127.0.0.1:8000/api/roles", {
        method: "GET",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${token.getToken}`,
        },
      }).then((response) => {
        this.roles = response.data;
        console.log("roles", this.roles);
      });
      //  console.log('roles', roles.authorization.token);
    } catch (error) {
      this.errors.push(error);
      throw error;
    }
    //end  get role



 

   
    // try {
    //   const role = $fetch("http://127.0.0.1:8000/api/roles/id", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       authorization: `Bearer ${token.getToken}`,
    //     },
    //   }).then((response) => {
    //     this.roles = response.data;
    //     console.log("roles", this.roles);
    //   });
    //   //  console.log('roles', roles.authorization.token);
    // } catch (error) {
    //   this.errors.push(error);
    //   throw error;
    // }  // end update

  }

  // end
};
</script>

//
<script setup>
//   const auth = useAuthStore();
//    const token = useTokenStore();
//    const data = [];

//    const errors = ref([]) ;

//    try {
//    const res = $fetch('http://127.0.0.1:8000/api/role_permissions', {
//      method: 'GET',
//      headers: {
//        Accept: "application/json",
//        authorization: `Bearer ${token.getToken}`,

//      },

//    });

//    console.log('permissions', res);

//  } catch (error) {
//    throw error;
//  }

//  //alert('oky');

//
</script>

<style lang="scss" scoped></style>
