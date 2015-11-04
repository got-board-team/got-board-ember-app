import DS from 'ember-data';
import config from '../config/environment';
import Pusherable from '../services/pusherable';

export function initialize(instance) {
  // TODO When update to Ember 2.1.0 change this!
  let pusherService = instance.container.lookup('service:pusher');
  //let pusherService = instance.lookup('service:pusher');
  let extraPusherOptions = {};
  pusherService.setup(config.APP.PUSHER_KEY, extraPusherOptions);
}

export default {
  name: 'ember-pusher',
  initialize: initialize
};
