
import { defineStore } from 'pinia'
import { useTokenStore } from './token';
export const useAuthStore = defineStore('auth', {


  state: () => ({
    user: {},

  }),
  // user save
  persist: {
    paths: ['user'],
  },


  getters: {
    getUser: (state) => state.user,

  },

  actions: {


    // login
    async login(userData) {

      const token = useTokenStore();
      try {
        const data = await $fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          body: { ...userData },
        });
        console.log('auth_store', data.authorization.token);
        token.setToken(data.authorization.token);
        this.user = data.user;
        return navigateTo("/dashboard");
      } catch (error) {
        throw error;
      }

    },//end login



       // register
       async register(userData) {

        //alert('oky');

        const token = useTokenStore();
        try {
          const data = await $fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            body: { ...userData },
          });
          return navigateTo("/auth/login");
        } catch (error) {
          throw error;
        }
  
      },
  





    // logout part

    async logout() {

      //alert('oky');

      const token = useTokenStore();
      try {
        const res = await $fetch('http://127.0.0.1:8000/api/logout', {
          method: 'POST',
          headers: {
            Accept: "application/json",
            authorization: `Bearer ${token.getToken}`,

          },

        });
        token.removeToken();
        console.log('auth_store', res);
        return navigateTo("/auth/login");

      } catch (error) {
        throw error;
      }

    },

    // async rolerequest() {

    //   //alert('oky');

    //   const token = useTokenStore();
    //   try {
    //     const res = await $fetch('http://127.0.0.1:8000/api/role_permissions', {
    //       method: 'GET',
    //       headers: {
    //         Accept: "application/json",
    //         authorization: `Bearer ${token.getToken}`,

    //       },

    //     });

    //     console.log('auth_store', res);


    //   } catch (error) {
    //     throw error;
    //   }

    // },


    //         commonSetter(data){
    //  const tokenStore =useTokenStore();
    //  tokenStore.setToken(data.authorization.token);
    //  this.user = data.user

    //  return navigateTo("/layout/dashboard");

    //         }



  },//end action
})