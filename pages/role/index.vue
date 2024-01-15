<template>

    <br>
    <br>
    <br>
    
        <!-- card start -->
        <div>
        <div
          class="w-full  text-center bg-white border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-1 text-3xl font-bold text-gray-900 dark:text-white">All User</h5>
        
        </div>
    
    
      </div>
    <!-- end card -->
    
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-1">
                       No
                    </th>
                    <th scope="col" class="px-6 py-1">
                       User Name
                    </th>
                    <th scope="col" class="px-6 py-1">
                       Role
                    </th>
                 
                    <th scope="col" class="px-6 py-1">
                        Action
                    </th>
                  
    
                </tr>
            </thead>
            <tbody>
    
    
                <tr  v-for="role in roles.data" :key="role.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ role.id }}
                    </th>
                   
                    <td class="px-6 py-2">
                        {{ role.name }}
                    </td>
                    <td class="px-6 py-2">
                        {{ role.name }}
                    </td>  
    
                   
                
                    <td class="px-6 py-2 text-right">
                        <nuxt-link href="/role/edit"   class="font-medium text-blue-600 dark:text-blue-500 hover:underline "> Edit </nuxt-link>
                    </td>
    
                    <td class="px-6 py-2 text-right">
                        <a href="#" @click.prevent="remove(role)"  class="font-medium text-blue-600 dark:text-blue-500 hover:underline ">Delete</a>
                    </td>
                </tr>
    
    
            </tbody>
        </table>
    </div>
    
    
    <br>
    
    
</template>

  
  
  
<script>




  </script>
  
  <style lang="scss" scoped></style>