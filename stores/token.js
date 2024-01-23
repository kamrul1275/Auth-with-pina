
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
    state: () => ({
        token: null,
        loggedIn: false,
    }),
    // token save
    persist: true,


    getters: {
        getToken: (state) => state.token,
        getStatus: (state) => state.loggedIn,
    },
    actions: {

        setToken(token) {
            this.token = token;
            this.loggedIn = true;
        },

        removeToken() {
            console.log('hiii');
            this.$reset();



        },


    },
})