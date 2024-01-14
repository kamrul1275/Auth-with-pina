
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
    state: () => ({ 
        token: null, 
        loggedIn: false, 
    }),
// token save
    persist: true,


    getters: {
      getToken:(state) => state.token,
      getStatus:(state) => state.loggedIn,
    },
    actions: {
      
        setToken(token){
        this.token =token;
        this.loggedIn =true;
        },

        removeToken(){
        const auth = useAuthStore();
        auth.$reset();
        this.$reset();
        return navigateTo("/login");
            
            },


    },
  })