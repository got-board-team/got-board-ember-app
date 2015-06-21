import Ember from 'ember';
import { Bindings } from 'ember-pusher/bindings';

export default Ember.Controller.extend(Bindings, {
  logPusherEvents: true,
  PUSHER_SUBSCRIPTIONS: {
    units: ['move']
  },
  actions: {
    move: function(data) {
      this.store.find("unit", data.id).then(function (u) {
        u.setProperties({ x: data.x, y: data.y });
      });
    },
  },
});
