<template>
  <div>
    <div class="container">
      <h5 class="py-3">All User Create</h5>

      <div class="row">
        <div class="col-md-7">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users.data" :key="user.id">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <a href="#" @click.prevent="edit(user)" class="btn btn-success">Edit</a>
                  <a href="#" @click.prevent="remove(product)" class="btn btn-danger"
                    >Delete</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="col-md"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

definePageMeta({
  middleware: "auth",
  // or middleware: 'auth'
});
export default {
  // start...
  data() {
    return {
      users: {},

      resetForm() {
        this.users = {
          id: "",
          title: "",
          price: "",
        };
      },

      users: {
        id: "",
        title: "",
        price: "",
      },
    };
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
      axios.get(page).then(({ data }) => {
        console.log(data);
        this.users = data;
      });
    },

    // edit part start

    edit(user) {
      //alert('oky');
      console.log(user);

      this.users = user;
    },
    updateData() {
      var editrecords = "http://127.0.0.1:8000/api/users/" + this.users.id;
      axios.put(editrecords, this.users).then(({ data }) => {
        this.users.title = "";
        this.users.price = "";
        this.id = "";
        alert("User Updated....!!!");
        this.UserLoad();
        console.log(data);
        this.resetForm(); // call the resetForm
      });
    },

    // delete customer start

    remove(user) {
      var url = `http://127.0.0.1:8000/api/user/${user.id}`;
      axios.delete(url);
      alert("User Deleted...");
      this.UserLoad();
    },

    //end  delete part
  },
};
</script>

<style lang="scss" scoped></style>
