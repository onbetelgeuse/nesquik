export const environment = {
  production: true,
  socket: { url: 'http://localhost:3000' },
  toast: { delay: 2500, autohide: true },

  api: {
    upload: '/api/files/upload',
    auth: {
      register: '/api/auth/register',
      me: '/api/auth/me',
      login: '/api/auth/login',
    },
    files: '/api/files',
    communes: '/api/communes',
  },
};
