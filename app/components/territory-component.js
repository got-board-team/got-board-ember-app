import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "g",
  classNames: ['territory'],

  territory: Ember.computed("territory", function () {
    return this.territory;
  }),

  drop: function () {
    console.log("DROP");
    let self = this;
    let obj = window.draggedObject;
    let x = window.offset.left;
    let y = window.offset.top;

    obj.setProperties({ territory: self.territory, x: x, y: y });

    obj.save().then(function (piece) {
      console.log(piece.get("type") + ' was dropped into ' + self.territory.id +
                ' at x: ' + piece.get("x") + ' , y: ' + piece.get("y"));
    });

  },
});
