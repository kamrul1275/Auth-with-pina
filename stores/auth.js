
import { defineStore } from 'pinia'
import { useTokenStore } from './token';
export const useAuthStore = defineStore('auth', {
 
  
    actions: {
      
        async login(userData){
            
            const token =useTokenStore();
            try {
                const data = await $fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                body: {...userData},
          });
         console.log('auth_store',data.authorization.token); 
          token.setToken(data.authorization.token);
            } catch (error) {
              throw error;
            }
        
          }

    },//end action
  })