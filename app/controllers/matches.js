import Ember from 'ember';
import { Bindings } from 'ember-pusher/bindings';

export default Ember.Controller.extend(Bindings, {
  logPusherEvents: true,
  PUSHER_SUBSCRIPTIONS: {
    unit: ["footman.update", "knight.update", "boat.update", "siege_engine.update"]
  },
  unitUpdate: function(data) {
    this.store.find("unit", data.id).then(function (unit) {
      data.territory_id = data.territory;
      delete data.territory;
      unit.setProperties(data);
    });
  },
  actions: {
    footmanUpdate: function (data) {
      this.unitUpdate(data);
    },
    knightUpdate: function (data) {
      this.unitUpdate(data);
    },
    boatUpdate: function (data) {
      this.unitUpdate(data);
    },
    siegeEngineUpdate: function (data) {
      this.unitUpdate(data);
    }
  },
});