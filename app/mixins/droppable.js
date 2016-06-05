import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Mixin.create({
  classNameBindings: ['activedClass'],

  dragEnter() {
    this.set('activedClass', 'drop-actived');
  },

  dragLeave() {
    this.set('activedClass', null);
  },

  dragOver() {
    //console.log('droppable#dragOver');
    return false;
  },

  drop(event) {
    console.log('droppable#drop');
    this.set('activedClass', null);
    console.group();
    let data = {};
    if (event) {
      let transferDataString = event.dataTransfer.getData('application/json');
      let transferData = JSON.parse(transferDataString);
      data = {
        id: transferData.id,
        modelName: transferData.modelName,
        attributes: {
          x: event.originalEvent.offsetX - transferData.offsetX,
          y: event.originalEvent.offsetY - transferData.offsetY
        }
      };
    } else {
      // TODO: this is the old, remove when draggable mixin implements html5 drag and drop
      data.id = window.draggedObject.id;
      data.modelName = window.draggedObject.constructor.modelName;
      data.attributes =  {
        x: window.offset.left,
        y: window.offset.top
      };
    }
    data = this.willSetDropData(data);
    this.get('onDrop')(data);
    console.groupEnd();
  },

  actions: {
    allowDrop() {
    },
  },

  willSetDropData(data){
    return data;
  },

  d: function () {
    return d3.select(this.element);
  },

  bindEvents: function () {
    var self = this;
    var d = this.d();

    d.on('mouseout', function(){
      if (!window.dragging) { return; }
      d.classed('drop-actived', false);
    });

    d.on('mouseover', function(){
      if (!window.dragging) { return; }
      d.classed('drop-actived', true);
    });

    d.on('mouseup', function(){
      if (!window.dragging) { return; }
      d.classed('drop-actived', false);
      self.drop();
    });
  }.on('didInsertElement'),
});
