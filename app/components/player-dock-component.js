import Ember from 'ember';
import Droppable from '../mixins/droppable';

const { computed }  = Ember;

export default Ember.Component.extend(Droppable, {
  tagName: "article",
  attributeBindings: ["id"],
  classNames: ["player-dock"],
  isExpanded: false,

  orderService: Ember.inject.service("order-service"),

  id: computed(function () {
     return "player-dock-" + this.player.id;
  }),

  actions: {
    expand: function() {
      this.set('isExpanded', true);
    },

    contract: function() {
      this.set('isExpanded', false);
    },

    revealOrders: function () {
      let ids = this.get("player.orderTokens").mapBy("id");
      this.get("orderService").revealOrders(ids);
    },
  },

  drop: function () {
    var obj = window.draggedObject;
    obj.setProperties({ territory: null, x: 0, y: 0 });
    obj.save().then(function (piece) {
      console.log(piece.toString() + ' was dropped into the player dock' +
                  ' at x: ' + piece.get("x") + ' , y: ' + piece.get("y"));
    });
  },

});
