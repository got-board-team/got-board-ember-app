import Ember from 'ember';
import Draggable from '../mixins/draggable';

const { computed, observer } = Ember;

export default Ember.Component.extend(Draggable, {
  tagName: "div",
  classNames: ["flippable"],
  classNameBindings: ["houseCard.house", "flippedCssClass"],
  attributeBindings: ["id", "style"],

  session: Ember.inject.service(),

  id: computed(function () {
    //TODO Add some logic to generate a different id when order is facedown to
    //avoid others players to find out which is the order
    return "house-card-" + this.get("houseCard.id");
  }),

  draggedObject: function () {
    return this.houseCard;
  },

  houseCard: computed("houseCard", function () {
    return this.get("houseCard");
  }),

  houseCardClass: computed("houseCard.faceup", function () {
    let houseCardName = this.get("houseCard.name");
    houseCardName = Ember.String.dasherize(houseCardName);
    let cssClass = this.isFaceup() ? houseCardName : "house-card-cover";
    return cssClass;
  }),

  flippedCssClass: computed("houseCard.faceup", function () {
    return this.isFaceup() ? "flipped" : "";
  }),

  isFlipperEnabled: computed("houseCard.territory", function () {
    return this.get("houseCard.territory.id") !== null;
  }),

  isFaceup: function () {
    let playerUser = this.get("houseCard.player.userId");
    let currentPlayer = this.get("session.userId");
    console.log("P ", playerUser);
    console.log("C ", currentPlayer);
    let isCurrentPlayer = (playerUser == currentPlayer)
    return isCurrentPlayer || this.get("houseCard.faceup");
  },

  style: computed("houseCard.x", "houseCard.y", function () {
    var top = this.get("houseCard.y");
    var left = this.get("houseCard.x");
    var style = "top: ${top}px; left: ${left}px;";
    //TODO refactor removing the line bellow when possible to use es6
    //(babel? https://github.com/babel/ember-cli-babel)
    style = style.replace("${top}", top).replace("${left}", left);
    return new Ember.Handlebars.SafeString(style);
  }),

  facedown: observer("houseCard.territory", function (attribute) {
    if (this.get("houseCard.territory") == null) {
      this.set("houseCard.faceup", false);
    }
  }),
});
