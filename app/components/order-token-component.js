import Ember from 'ember';
import Draggable from '../mixins/draggable';

export default Ember.Component.extend(Draggable, {
  tagName: "div",
  classNames: ["piece"],
  classNameBindings: ["orderToken.house", "orderClass"],
  attributeBindings: ["id", "style"],

  id: Ember.computed("orderToken.id", function () {
    return "order-token-" + this.get("orderToken.id");
  }),

  orderToken: Ember.computed("orderToken", function () {
    return this.get("orderToken");
  }),

  orderClass: Ember.computed("orderToken.faceup", function () {
    let orderType = this.get("orderToken.type");
    orderType = Ember.String.dasherize(orderType);
    let cssClass = this.isFaceup() ? orderType : "order-cover";
    return cssClass;
  }),

  isFaceup: function () {
    // TODO refactor o get house from session
    var house = window.location.search.split("=")[1] || "Greyjoy";
    house = house.toLowerCase();
    return house === this.get("orderToken.house") || this.get("orderToken.faceup");
  },

  style: function () {
    return "top: " + this.orderToken.get("y") + "px; left: " + this.orderToken.get("x") + "px;";
    // TODO refactor
  }.property("orderToken.x", "orderToken.y"),

  draggedObject: function () {
    return this.orderToken;
  },

  orderTokenUpdate: function () {
    console.log("orderTokenUpdate");
    var data = this.$().data("pusher");
    data.territory_id = data.territory;
    delete data.territory;
    this.orderToken.setProperties(data);
    (data.territory_id == null) ? this.$().hide() : this.$().show();
  },
});
