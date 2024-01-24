<template>
  <br />
  <br />

  <div>
    <nuxt-link
      to="/product/create"
      class="w-full text-center bg-red border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700"
      >add Role
    </nuxt-link>

    <br>
    <br>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-1">Id</th>
            <th scope="col" class="px-6 py-1">User Name</th>
            <th scope="col" class="px-6 py-1">Role</th>
            <th scope="col" class="px-6 py-1">Action</th>
          </tr>
        </thead>
        <tbody>

          
          <tr    v-for="(item, index) in AccessRole" :key="index" 
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >

            <th
              scope="row"
              class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >   <td class="px-6 py-2">  {{ item.id}} </td>  </th>

            <td class="px-6 py-2">  {{ item.name}} </td> 

            <td class="px-6 py-2">
              {{ item.role.name}} 
           </td> 

            <td class="px-6">
              <nuxt-link
                href="/product/edit"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
               ........
              </nuxt-link>

              <nuxt-link
                href="/product/edit"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
              ........
              </nuxt-link>
            </td>

        
          </tr>
        </tbody>
      </table>
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
      AccessRole:[]
    };
  },

  mounted() {
    try {
      let token = useTokenStore();
      const AccessRole = axios
        .get("http://127.0.0.1:8000/api/user/role/access", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.getToken}`,
          },
        })
        .then((response) => {
          this.AccessRole = response.data;
          console.log("User Role", this.AccessRole);
        });
    } catch (error) {}

  },// end


  // end
};
</script>

<style lang="scss" scoped></style>
