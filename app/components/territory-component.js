import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "g",
  classNames: ['territory'],

  init() {
    this._super(...arguments);
    let territory = this.get("territory");
    let store = territory.store;
    store.createRecord("garrison", { name: "winterfell", territory: territory, y: 540, x: 655 } )
  },

  territory: Ember.computed("territory", function () {
    return this.territory;
  }),

  drop: function (event) {
    if (event) {
      let object = event.dataTransfer.getData('object');
      console.log("DROP ", event.dataTransfer.getData('object'));
      let x = event.originalEvent.offsetX;
      let y = event.originalEvent.offsetY;
      console.log(x, y);
    } else {
      let self = this;
      let obj = window.draggedObject;
      let x = window.offset.left;
      let y = window.offset.top;

      obj.setProperties({ territory: self.territory, x: x, y: y });

      obj.save().then(function (piece) {
        console.log(piece.toString() + ' was dropped into ' + self.territory.id +
                    ' at x: ' + piece.get("x") + ' , y: ' + piece.get("y"));
      });
    }
  },

  addPowerToken: Ember.observer("territory.powerTokens.[]", function () {
    console.log("added");
  }),

  actions: {
    handleDragOver() {
      return false;
    },
    handleDrop(e) {
      console.log("territory-component#drop");
      return false;
    }
  }
});
