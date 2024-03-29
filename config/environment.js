/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'got-board-game',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {}
  };

  ENV.APP.PUSHER_KEY = 'cfdf3c0b0c4a559c3dfe';

  const LOCAL_TUNNEL_DOMAIN = process.env.LOCAL_TUNNEL_DOMAIN;
  console.log("localtunnel: ", LOCAL_TUNNEL_DOMAIN);

  ENV.APP.API_HOST = LOCAL_TUNNEL_DOMAIN ?
    `https://api${LOCAL_TUNNEL_DOMAIN}.localtunnel.me` : "http://localhost:3000";

  ENV.APP.OAUTH_CALLBACK_HOST = LOCAL_TUNNEL_DOMAIN ?
    `https://${LOCAL_TUNNEL_DOMAIN}.localtunnel.me` : "http://localhost:4200";

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: `${ENV.APP.API_HOST}/api/v1/users/authenticate`,
      authenticationRoute: "login",
    };

    ENV.torii = {
      providers: {
        'google-oauth2': {
          apiKey: "866943291177-90h4ribrqase40q5udthhceobgntkhlv.apps.googleusercontent.com",
          redirectUri: `${ENV.APP.OAUTH_CALLBACK_HOST}/oauth2callback`
        }
      }
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['contentSecurityPolicy'] = {
    'default-src': "'none'",
    'script-src': "'self' http://stats.pusher.com/ https://stats.pusher.com/",
    'connect-src': `'self' ws://ws.pusherapp.com/ wss://ws.pusherapp.com ${ENV.APP.API_HOST}`,
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-inline'",
    'media-src': "'self'",
  };

  return ENV;
};
