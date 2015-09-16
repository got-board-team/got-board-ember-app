import Ember from 'ember';
import Draggable from '../mixins/draggable';

export default Ember.Component.extend(Draggable, {
  tagName: "div",
  classNames: ["piece"],
  classNameBindings: ["unit.house", "type"],
  attributeBindings: ["style"],

  unit: function () {
    return this.get("unit");
  }.property("unit"),

  type: function () {
    return this.unit.get("type").toLowerCase();
  }.property("unit.type"),

  style: function () {
    // TODO refactor
    console.log("style");
    console.log(this.get("unit.id"));
    return "top: " + this.unit.get("y") + "px; left: " + this.unit.get("x") + "px;";
  }.property("unit.x", "unit.y"),

  draggedObject: function () {
    return this.unit;
  },
});
