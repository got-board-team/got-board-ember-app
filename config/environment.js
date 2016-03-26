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

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: "http://localhost:3000/api/v1/users/authenticate",
      authenticationRoute: 'login',
    };

    ENV.torii = {
      providers: {
        'google-oauth2': {
          apiKey: "866943291177-90h4ribrqase40q5udthhceobgntkhlv.apps.googleusercontent.com",
          redirectUri: "http://localhost:4200/oauth2callback"
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
    'connect-src': "'self' ws://ws.pusherapp.com/ wss://ws.pusherapp.com http://localhost:3000",
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-inline'",
    'media-src': "'self'",
  };

  return ENV;
};
