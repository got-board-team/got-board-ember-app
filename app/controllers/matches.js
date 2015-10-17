import Ember from 'ember';
import { Bindings } from 'ember-pusher/bindings';

export default Ember.Controller.extend(Bindings, {
  logPusherEvents: true,
  PUSHER_SUBSCRIPTIONS: {
    unit: ["footman.update", "knight.update", "boat.update", "siege_engine.update"]
  },

  unitUpdate: function(data) {
    var self = this;
    data.territory_id = data.territory;
    delete data.territory;
    console.log("unitUpdate");
    this.store.find("unit", data.id).then(function (unit) {
      if (unit.get("isDeleted")) { unit.rollback(); }

      if(data.territory_id == null) {
        if (self.house() != unit.get("player.house")) {
          console.log("R");
          unit.deleteRecord()
        }
      } else {
        self.store.find("territory", data.territory_id).then(function (t) {
          console.log("T");
          t.get("units").addObject(unit);
        });
      }

      setTimeout(function () {
        unit.setProperties(data);
      }, 100)
    })
  },

  currentPlayer: function() {
    var players = this.get("model.players");
    var house = window.location.search.split("=")[1] || "Greyjoy";
    var p = players.filterBy("house", house).toArray()[0];
    return p;
  }.property(),

  house: function () {
    return window.location.search.split("=")[1] || "Greyjoy";
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
    },
    buildUnits: function () {
      var units = [];
      return units;
    },
  },
});
