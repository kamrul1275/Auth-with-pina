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
                        Name
                    </th>
                    <th scope="col" class="px-6 py-1">
                       Email
                    </th>
                 
                    <th scope="col" class="px-6 py-1">
                        Action
                    </th>
                  
    
                </tr>
            </thead>
            <tbody>
    
    
                <tr  v-for="user in users.data" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ user.id }}
                    </th>
                   
                    <td class="px-6 py-2">
                        {{ user.name }}
                    </td>
                    <td class="px-6 py-2">
                        {{ user.email }}
                    </td>  
    
                   
                
                    <td class="px-6 py-2 text-right">
                        <nuxt-link href="/product/edit"   class="font-medium text-blue-600 dark:text-blue-500 hover:underline "> Edit </nuxt-link>
                    </td>
    
                    <td class="px-6 py-2 text-right">
                        <a href="#" @click.prevent="remove(user)"  class="font-medium text-blue-600 dark:text-blue-500 hover:underline ">Delete</a>
                    </td>
                </tr>
    
    
            </tbody>
        </table>
    </div>
    
    
    <br>
    
    
</template>


      

  
  
  <script>
  import axios from 'axios';
  export default {
  
  
    // start...
    data() {
      return {
  
  
        users: {},
  
        resetForm() {
  
          this.users = {
            id: '',
            title: '',
            price: '',
  
          }
  
        },
  
        users: {
          id: '',
          title: '',
          price: ''
  
        }
      }
    },
    // get product.........
  
    created() {
      this.UserLoad();
    },
  
    mounted() {
      console.log("mounted() called.......");
    },
  
    methods: {
      UserLoad() {
        var page = "http://127.0.0.1:8000/api/user";
  
        //console.log(page);
        axios.get(page)
          .then(
            ({ data }) => {
              console.log(data);
              this.users = data;
            }
          );
      },
  
      // edit part start
  
      edit(user) {
  
        //alert('oky');
        console.log(user);
  
        this.users = user;
  
      },
      updateData() {
        var editrecords = 'http://127.0.0.1:8000/api/users/' + this.users.id;
        axios.put(editrecords, this.users)
          .then(
            ({ data }) => {
              this.users.title = '';
              this.users.price = '';
              this.id = ''
              alert("User Updated....!!!");
              this.UserLoad();
              console.log(data);
              this.resetForm(); // call the resetForm 
            }
          );
  
      },
  
      // delete customer start
  
      remove(user) {
  
        var url = `http://127.0.0.1:8000/api/user/${user.id}`;
        axios.delete(url);
        alert("User Deleted...");
        this.UserLoad();
      }
  
      //end  delete part
  
    }
  
  
  }
  </script>
  
  
  <style lang="scss" scoped></style>