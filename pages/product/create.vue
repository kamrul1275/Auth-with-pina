<template>
  <br />
  <br />
  <br />

  <div>
    <h1 class="py-2 font-medium text-gray-900 dark:text-white text-center">
      Create Product page
    </h1>

    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >title</label
        >
        <input
          type="text"
          id="title" v-model="product.title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="title"
        />
      </div>

      <div class="mb-5">
        <label
          for="price"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >price</label
        >
        <input
          type="text"
          id="email" v-model="product.price"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name"
        />
      </div>

      <div class="mb-5">
        <label
          for="image" 
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >image</label
        >
        <input
          type="file"
          id="image" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        @click.prevent="productSubmite()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
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
     product:{
     
title:"",
price:"",
image:"",
     }
    };
  },

  methods:{

    productSubmite(){
      alert('oky');
    }

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
      const roles = $fetch("http://127.0.0.1:8000/api/roles/", {
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
  }
}
</script>

<style lang="scss" scoped></style>
