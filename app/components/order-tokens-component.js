import Ember from 'ember';
import Draggable from '../mixins/draggable';

export default Ember.Component.extend(Draggable, {
  tagName: "div",
  classNames: ["piece"],
  classNameBindings: ["order-token.house", "type"],
  attributeBindings: ["style"],

  orderToken: function () {
    console.log("o");
    return this.get("orderToken");
  }.property("orderToken"),

  type: function () {
    return this.orderToken.get("type").toLowerCase();
  }.property("orderToken.type"),

  style: function () {
    // TODO refactor
    console.log("orderToken style");
    return "top: " + this.orderToken.get("y") + "px; left: " + this.orderToken.get("x") + "px;";
  }.property("orderToken.x", "orderToken.y"),

  draggedObject: function () {
    return this.orderToken;
  },

  orderTokenUpdate: function (a, b, c) {
    console.log("orderTokenUpdate");
    var data = this.$().data("pusher");
    data.territory_id = data.territory;
    delete data.territory;
    this.orderToken.setProperties(data);
    (data.territory_id == null) ? this.$().hide() : this.$().show();
  },
});
