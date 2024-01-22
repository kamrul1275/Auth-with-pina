export default defineNuxtRouteMiddleware((to, from) => {

    const tokenStore = useTokenStore();
    
        if (tokenStore.auth.getUser.role.permissions ) {
          return navigateTo('/dashboard')
        }
      })
      