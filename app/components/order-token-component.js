import Ember from 'ember';
import Draggable from '../mixins/draggable';

const { computed, observer } = Ember;

export default Ember.Component.extend(Draggable, {
  tagName: "div",
  classNames: ["piece", "flippable"],
  classNameBindings: ["orderToken.house", "flippedCssClass"],
  attributeBindings: ["id", "style"],

  id: computed(function () {
    //TODO Add some logic to generate a different id when order is facedown to
    //avoid others players to find out which is the order
    return "order-token-" + this.get("orderToken.id");
  }),

  draggedObject: function () {
    return this.orderToken;
  },

  orderToken: computed("orderToken", function () {
    return this.get("orderToken");
  }),

  orderClass: computed("orderToken.faceup", function () {
    let orderType = this.get("orderToken.type");
    orderType = Ember.String.dasherize(orderType);
    let cssClass = this.isFaceup() ? orderType : "order-cover";
    return cssClass;
  }),

  flippedCssClass: computed("orderToken.faceup", function () {
    return this.isFaceup() ? "flipped" : "";
  }),

  isFlipperEnabled: computed("orderToken.territory", function () {
    return this.get("orderToken.territory.id") !== null;
  }),

  isFaceup: function () {
    // TODO refactor o get house from session
    var house = window.location.search.split("=")[1] || "Greyjoy";
    house = house.toLowerCase();
    return house === this.get("orderToken.house") || this.get("orderToken.faceup");
  },

  style: computed("orderToken.x", "orderToken.y", function () {
    var top = this.get("orderToken.y");
    var left = this.get("orderToken.x");
    var style = "top: ${top}px; left: ${left}px;";
    //TODO refactor removing the line bellow when possible to use es6
    //(babel? https://github.com/babel/ember-cli-babel)
    style = style.replace("${top}", top).replace("${left}", left);
    return new Ember.Handlebars.SafeString(style);
  }),

  facedown: observer("orderToken.territory", function (attribute) {
    if (this.get("orderToken.territory") == null) {
      this.set("orderToken.faceup", false);
    }
  }),
});
