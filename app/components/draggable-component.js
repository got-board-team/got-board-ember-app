import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings : [ 'draggable', 'style' ],
  draggable         : 'true',

  style: Ember.computed("object.x", "object.y", function () {
    var x = this.get("object.x");
    var y = this.get("object.y");
    return `top: ${y}px; left: ${x}px;`;
  }),

  dragStart(event) {
    let object = this.get('object.name');
    console.log(object);
    return event.dataTransfer.setData('object', object);
  },

  dragOver(event) {
    console.log("dragOver");
  }
});
