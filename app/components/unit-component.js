import Ember from 'ember';
import Draggable from '../mixins/draggable';

export default Ember.Component.extend(Draggable, {
  tagName: "foreignObject",
  classNames: ["piece"],
  attributeBindings: ["data-id", "data-type", "x", "y", "height", "width"],
  width: "100%",
  height: "100%",

  "data-id": function() {
    return this.unit.id;
  }.property('unit.id'),

  "data-type": function() {
    return this.unit.get('type');
  }
  .property('unit.type'),

  x: function() {
    return this.unit.get('x');
  }
  .property('unit.x'),

  y: function() {
    return this.unit.get('y');
  }
  .property('unit.y'),

});
