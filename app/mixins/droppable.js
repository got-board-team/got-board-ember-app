import Ember from 'ember';

export default Ember.Mixin.create({

  drop(event) {
    console.log("droppable#drop");
    console.group();
    let obj, x, y;
    if (event) {
      let id = event.dataTransfer.getData('object');
      let modelName = event.dataTransfer.getData('objectType');
      x = event.originalEvent.offsetX;
      y = event.originalEvent.offsetY;
      console.log(modelName, id);
      obj = this.territory.store.peekRecord(modelName, id);
    } else {
      // TODO: this is the old, remove when draggable mixin implements html5 drag and drop
      obj = window.draggedObject;
      x = window.offset.left;
      y = window.offset.top;
    }
    obj.setProperties({ x: x, y: y });
    console.groupEnd();
    this.didDropObject(obj);
  },

  actions: {
    allowDrop() {
    },
  },

  d: function () {
    return d3.select(this.element);
  },

  bindEvents: function () {
    var self = this;
    var d = this.d();

    d.on("mouseout", function(){
      if (!window.dragging) { return; }
      d.classed("drop-actived", false);
    });

    d.on("mouseover", function(){
      if (!window.dragging) { return; }
      d.classed("drop-actived", true);
    });

    d.on("mouseup", function(){
      if (!window.dragging) { return; }
      d.classed("drop-actived", false);
      self.drop();
    });
  }.on("didInsertElement"),
});
