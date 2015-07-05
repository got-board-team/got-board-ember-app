import Ember from 'ember';
import Draggable from '../mixins/draggable';

export default Ember.Component.extend(Draggable, {
  tagName: "foreignObject",
  classNames: ["piece"],
  classNameBindings: ['unit.house', 'unit.type'],
  attributeBindings: ["x", "y"],

  unit: function () {
    return this.get("unit");
  },

  x: function () {
    return this.unit.get("x");
  }.property("unit.x"),

  y: function () {
    return this.unit.get("y");
  }.property("unit.y"),

  draggedObject: function () {
    return this.unit;
  },
});
