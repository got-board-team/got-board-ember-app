import Ember from 'ember';
import Draggable from '../mixins/droppable';

export default Ember.Component.extend({
  attributeBindings : [ 'draggable', 'style' ],
  draggable         : 'true',

  style: Ember.computed("object.x", "object.y", function () {
    var x = this.get("object.x");
    var y = this.get("object.y");
    return `top: ${y}px; left: ${x}px;`;
  }),

  dragStart(event) {
    console.log("draggable-component#dragStart");
    let transferData = JSON.stringify({
      id: this.object.id,
      modelName: this.object.constructor.modelName,
      offsetX: event.originalEvent.offsetX,
      offsetY: event.originalEvent.offsetY
    });
    return event.dataTransfer.setData("application/json", transferData);
  },

  dragOver() {
    //console.log('draggable-computed#dragOver');
    return false;
  },
});
