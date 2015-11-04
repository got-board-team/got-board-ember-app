/* globals Pusher */
import DS from 'ember-data';
import ENV from '../config/environment';
import Pusherable from '../services/pusherable';

export function initialize(instance) {

  DS.Model.reopenClass({
    pusherable(channelName, messageTypes) {
      let pusher = new Pusher(ENV.APP.PUSHER_KEY, { encrypted: true });

      Pusherable.create({
        container: instance.container,
        pusher: pusher,
        model: this,
        channelName: channelName,
        messageTypes: messageTypes
      });

      return this;
    }
  });
}

export default {
  name: 'pusherable',
  initialize: initialize
};
