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
  <br>

  <nuxt-link  to="/product/create" v-if="auth.getUser.role.permissions"
    >Create Product </nuxt-link >

   <br>
   <br>

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
    
          <th scope="col" class="px-6 py-1">Action</th>
        </tr>
      </thead>
      <tbody>

    <!-- {{ AccessRole }}
        <tr 
          v-for="product in AccessRole"
          :key="product.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
  -->
       


        <tr>
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            02
          </th>

          <td class="px-6 py-2">
rubi          </td>
          <td class="px-6 py-2">
           556
          </td>

          <td class="px-6 py-2">
           66
          </td>


          <td class="px-6 ">
            <nuxt-link
              href="/product/edit"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>
          </td>

          <td class="px-6">
            <a
              href="#"
             
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr> 




        <tr>
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            03
          </th>

          <td class="px-6 py-2">
c++          </td>
          <td class="px-6 py-2">
           3343
          </td>

          <td class="px-6 py-2">
           03
          </td>

         

          <td class="px-6">
            <nuxt-link
              href="/product/edit"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>
          </td>

          <td class="px-6">
            <a
              href="#"
             
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr> 

        <tr>
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            05
          </th>

          <td class="px-6 py-2">
php          </td>
          <td class="px-6 py-2">
           556
          </td>

          <td class="px-6 py-2">
           66
          </td>


          <td class="px-6 ">
            <nuxt-link
              href="/product/edit"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>
          </td>

          <td class="px-6">
            <a
              href="#"
             
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr> 




        <tr>
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            07
          </th>

          <td class="px-6 py-2">
c#          </td>
          <td class="px-6 py-2">
           099
          </td>

          <td class="px-6 py-2">
           03
          </td>

         

          <td class="px-6">
            <nuxt-link
              href="/product/edit"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>
          </td>

          <td class="px-6">
            <a
              href="#"
             
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr> 

        <tr>
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            08
          </th>

          <td class="px-6 py-2">
test1         </td>
          <td class="px-6 py-2">
           899
          </td>

          <td class="px-6 py-2">
           03
          </td>

         

          <td class="px-6">
            <nuxt-link
              href="/product/edit"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>
          </td>

          <td class="px-6">
            <a
              href="#"
             
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr> 



        <tr>
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            09
          </th>

          <td class="px-6 py-2">
test2        </td>
          <td class="px-6 py-2">
           098
          </td>

          <td class="px-6 py-2">
           03
          </td>

         

          <td class="px-6">
            <nuxt-link
              href="/product/edit" v-if="auth.getPermission"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>
          </td>

          <td class="px-6">
            <a
              href="#"  v-if="auth.getPermission"
             
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr> 



        <tr>
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            10
          </th>

          <td class="px-6 py-2">
test2         </td>
          <td class="px-6 py-2">
           1122
          </td>

          <td class="px-6 py-2">
           03
          </td>

         

          <td class="px-6">
            <nuxt-link
              href="/product/edit"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>
          </td>

          <td class="px-6">
            <a
              href="#"
             
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr> 


        <tr>
          <th
            scope="row"
            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            11
          </th>

          <td class="px-6 py-2">
test4        </td>
          <td class="px-6 py-2">
           3232
          </td>

          <td class="px-6 py-2">
           03
          </td>

         

          <td class="px-6" v-if="permission1" v-for="per in permission1">
          <!-- {{ per }} -->
            <nuxt-link
              v-if="per.name=='edit'"
              href="/product/edit"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </nuxt-link>

            <a
              href="#"
              v-if="per.name=='delete'"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Delete</a
            >

          </td>
        </tr> 
        <!-- <input type="text" v-model="1" :page-count="5" :total="items.10"> -->
      </tbody>
    </table>

    <!-- <UPagination v-model="product.page" :page-count="calculatePageCount()" :total="product.total" @pageChange="fetchData" /> -->

    <UPagination v-model="page" :page-count="5" :total="30" /> 


  </div>



  <br>

  <br>
  <br>

  <br>
</template>


<script setup>
import axios from "axios";

const page = ref(1)
const items = ref(Array(55));


const auth = useAuthStore();

definePageMeta({
  middleware: "auth",
  // or middleware: 'auth'
});


// const token = useTokenStore();

const permission1 = computed(() => {
  console.log(auth.getPermission);
  return auth.getPermission['/product'];
});





</script>

<style lang="scss" scoped></style>
