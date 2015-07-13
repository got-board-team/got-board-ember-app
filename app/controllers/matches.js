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

  currentPlayer: function() {
    var players = this.get("model.players");
    var p = players.filterBy("house", "Stark").toArray()[0];
    return p;
  }.property(),

  availableUnits: function() {
    var p =  this.get("currentPlayer");
    var board = p.get("match.board");
    var unit = this.store.createRecord("unit", {
      type: "Footman",
      player: p,
      board: board,
    });
    return [unit];
  }.property("currentPlayer"),

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
