export default defineNuxtRouteMiddleware((to, from) => {

  const auth = useAuthStore();
    
        if (!auth.getUser.role.permissions) {
          redirect('/unauthorized')
        }
    })
    

