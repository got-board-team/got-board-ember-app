import Ember from 'ember';
import Draggable from '../mixins/draggable';

const { computed, observer } = Ember;

export default Ember.Component.extend(Draggable, {
  tagName: "div",
  classNames: ["piece", "power-token"],
  classNameBindings: ["powerToken.house"],
  attributeBindings: ["id", "style"],

  id: computed(function () {
    return "power-token-" + this.get("powerToken.id");
  }),

  draggedObject: function () {
    return this.get("powerToken");
  },

  style: computed("powerToken.x", "powerToken.y", function () {
    var top = this.get("powerToken.y");
    var left = this.get("powerToken.x");
    var style = "top: ${top}px; left: ${left}px;";
    //TODO refactor removing the line bellow when possible to use es6
    //(babel? https://github.com/babel/ember-cli-babel)
    style = style.replace("${top}", top).replace("${left}", left);
    return new Ember.Handlebars.SafeString(style);
  }),
});
