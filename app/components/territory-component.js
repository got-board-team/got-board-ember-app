import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "g",
  classNames: ['territory'],

  territory: Ember.computed("territory", function () {
    return this.territory;
  }),

  drop: function () {
    var self = this;

    var draggedElement = window.draggedElement;
    var x = window.offset.left;
    var y = window.offset.top;
    var obj = window.draggedObject;

    obj.setProperties({ territory: self.territory, x: x, y: y });
    //console.log(territory.get("units").toArray());
    //console.log(territory.get("orderTokens").toArray());

    obj.save().then(function (unit) {
      var player = unit.get("player");
      console.log(unit.get("type") + ' was dropped into ' + self.territory.id +
                ' at x: ' + unit.get("x") + ' , y: ' + unit.get("y"));
    });

  },
});
