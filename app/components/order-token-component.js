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

  style: Ember.computed("orderToken.x", "orderToken.y", function () {
    var top = this.get("orderToken.y");
    var left = this.get("orderToken.x");
    var style = "top: ${top}px; left: ${left}px;";
    //TODO refactor removing the line bellow when possible to use es6
    //(babel? https://github.com/babel/ember-cli-babel)
    style = style.replace("${top}", top).replace("${left}", left);
    return new Ember.Handlebars.SafeString(style);
  }),

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
