import Ember from 'ember';
import EmberPusher from 'ember-pusher';

export default Ember.Controller.extend(EmberPusher.Bindings, {
  logPusherEvents: true,
  PUSHER_SUBSCRIPTIONS: {
    unit: ["footman.update", "knight.update", "boat.update", "siege_engine.update"]
  },

  unitUpdate: function(data) {
    var self = this;
    let id = data.id;
    data.territory_id = data.territory;
    delete data.territory;
    delete data.id;
    console.log("unitUpdate");
    this.store.find("unit", id).then(function (unit) {
      if (unit.get("isDeleted")) { unit.rollback(); }

      var territory = self.store.peekRecord("territory", data.territory_id);
      if(territory) {
        territory.get("units").addObject(unit);
      } else if (self.house() !== unit.get("player.house")) {
        unit.deleteRecord();
      }

      // HACK: wait to see css transition animation
      setTimeout(function () {
        unit.setProperties(data);
      }, 100);
    });
  },

  currentPlayer: function() {
    var players = this.get("model.players");
    var house = window.location.search.split("=")[1] || "Greyjoy";
    var p = players.filterBy("house", house).toArray()[0];
    return p;
  }.property(),

  house: function () {
    var house = window.location.search.split("=")[1] || "Greyjoy";
    window.house = house;
    return house;
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
