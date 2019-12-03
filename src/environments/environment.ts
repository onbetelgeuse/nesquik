// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000',
  socketio: { url: 'http://localhost:3000' },
  toast: { delay: 2500, autohide: true },

  api: {
    upload: 'api/files/upload',
    auth: {
      register: 'api/auth/register',
      me: 'api/auth/me',
      login: 'api/auth/login',
    },
    files: 'api/files',
    communes: 'api/communes',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
