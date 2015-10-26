import config from '../config/environment';

export function initialize(instance) {
  let pusherService = instance.lookup('service:pusher');
  let extraPusherOptions = {};
  pusherService.setup(config.APP.PUSHER_KEY, extraPusherOptions);
}

export default {
  name: 'ember-pusher',
  initialize: initialize
};
