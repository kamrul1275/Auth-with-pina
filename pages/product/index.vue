<template>
  <br>
  <br>
  <br>

  <!-- card start -->
  <div>
    <div
      class="w-full text-center bg-white border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-1 text-3xl font-bold text-gray-900 dark:text-white">All Product</h5>
    </div>
  </div>
  <!-- end card -->

  <nuxt-link  to="/product/create"  class="w-full text-center bg-red border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700"
    >Create Product </nuxt-link >

   

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

    <!-- {{ products }} -->
    <table 
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead 
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-1">Product Id</th>
          <th scope="col" class="px-6 py-1">Title</th>
          <th scope="col" class="px-6 py-1">Price</th>
          <th scope="col" class="px-6 py-1">User Name</th>
          <th scope="col" class="px-6 py-1">Product_Images</th>
          <th scope="col" class="px-6 py-1">Action</th>
        </tr>
      </thead>
      <tbody>

    {{ AccessRole }}
        <tr 
          v-for="product in AccessRole"
          :key="product.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >

        
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ product.id }}
          </th>

          <td class="px-6 py-2">
            {{ product.title }}
          </td>
          <td class="px-6 py-2">
            {{ product.price }}
          </td>

          <td class="px-6 py-2">
            {{ product.user_id }}
          </td>

          <td class="px-6 py-2">
            <img :src="product.image" alt="Product Image" />
          </td>

          <td class="px-6 py-2 text-right">
            <nuxt-link
              href="/product/edit"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>
          </td>

          <td class="px-6 py-2 text-right">
            <a
              href="#"
              @click.prevent="remove(product)"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr>
        <!-- <input type="text" v-model="1" :page-count="5" :total="items.10"> -->
      </tbody>
    </table>

    <!-- <UPagination v-model="product.page" :page-count="calculatePageCount()" :total="product.total" @pageChange="fetchData" /> -->

    <UPagination v-model="page" :page-count="5" :total="10" />



  </div>

  <br>

  <br>
  <br>

  <br>
</template>


<script>
import axios from "axios";

definePageMeta({
  middleware: "auth",
  // or middleware: 'auth'
});

definePageMeta({
  middleware: 'permission'
  // or middleware: 'auth'
});


export default {
  // start...

  data() {
    return {
      products: {},

      product: {
        id: "",
        title: "",
        price: "",
        user_id: "",
     
      },
   
    };
  },







  mounted() {
    try {
      let token = useTokenStore();
      const AccessRole = axios
        .get("http://127.0.0.1:8000/api/products", {
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







}






</script>

<style lang="scss" scoped></style>
