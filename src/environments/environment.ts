// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* auth_config: {
    client_id: 'appauth',
    server_host: 'http://localhost:5200',
    redirect_url: 'com.appauth.demo://callback',
    end_session_redirect_url: 'com.appauth.demo://endsession',
    scopes: 'openid offline_access',
    pkce: true
  } */
  /* auth_config: {
    client_id: '0oaruqy0iNDUCeW8n0x6',
    server_host: 'https://afc-np.oktapreview.com/oauth2/ausruqcv4uJD5x9xj0x6',
    redirect_url: 'dev.com.adesa.afc://callback',
    end_session_redirect_url: 'dev.com.adesa.afc://endsession',
    scopes: 'openid offline_access',
    pkce: true
  } */
  auth_config: {
    client_id: '0oaruqy0iNDUCeW8n0x6',
    server_host: 'https://afc-np.oktapreview.com/oauth2/ausruqcv4uJD5x9xj0x6',
    redirect_url: 'dev.com.adesa.afc:/loginCallback',
    end_session_redirect_url: 'dev.com.adesa.afc:/logout',
    scopes: 'openid',
    pkce: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
