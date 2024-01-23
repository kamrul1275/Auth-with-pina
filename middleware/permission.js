export default function ({ store, route, redirect }) {
  const auth = useAuthStore();

  // Check if the user has the required permission
  if (!auth.getUser.role.permissions) {
    // Redirect to a forbidden page or handle unauthorized access
    return redirect('/dashboard');
  }
}

function getRequiredPermission(routePath) {
  // Define a mapping of route paths to required permissions
  const permissionMap = {
    '/product/create': 'create',
    '/product/edit': 'edit',
    // Add more routes and permissions as needed
  };

  return permissionMap[routePath] || null;
}
