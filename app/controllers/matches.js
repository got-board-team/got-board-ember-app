import Ember from 'ember';
import EmberPusher from 'ember-pusher';

export default Ember.Controller.extend(EmberPusher.Bindings, {
  logPusherEvents: true,

  PUSHER_SUBSCRIPTIONS: {
    unit: ["footman.update", "knight.update", "boat.update", "siege_engine.update"],
    order_token: [ "consolidate.update",
                   "consolidate_p.update",
                   "defend.update",
                   "defend_p.update",
                   "march.update",
                   "march_p.update",
                   "march_m.update",
                   "reveal" ]
  },

  pieceUpdate: function(modelName, data) {
    let self = this;
    let id = data.id;
    data.territory_id = data.territory;
    delete data.id;
    delete data.territory;
    this.store.find(modelName, id).then(function (piece) {
      let collectionName = Ember.String.pluralize(modelName);
      let territory = self.store.peekRecord("territory", data.territory_id);

      if(territory) {
        territory.get(collectionName).addObject(piece);
        //HACK: wait to see css transition animation
        setTimeout(function () {
          piece.setProperties(data);
        }, 100);
      } else {
        let pieces = piece.get("territory." + collectionName);
        if (!pieces) { return; }
        pieces.removeObject(piece);
        piece.setProperties(data);
      }
    });
  },

  unitUpdate: function(data) {
    this.pieceUpdate("unit", data);
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
    reveal: function (data) {
      let playerId = data.player_id;
      let player = this.store.peekRecord("player", playerId);
      player.get("orderTokens").forEach(function (orderToken) {
        orderToken.set("faceup", true);
      });
    },
    marchUpdate: function (data) {
      this.pieceUpdate("orderToken", data);
    },
    marchPUpdate: function (data) {
      this.pieceUpdate("orderToken", data);
    },
    marchMUpdate: function (data) {
      this.pieceUpdate("orderToken", data);
    },
    consolidateUpdate: function (data) {
      this.pieceUpdate("orderToken", data);
    },
    consolidatePUpdate: function (data) {
      this.pieceUpdate("orderToken", data);
    },
    defendUpdate: function (data) {
      this.pieceUpdate("orderToken", data);
    },
    defendPUpdate: function (data) {
      this.pieceUpdate("orderToken", data);
    },
  },
});
