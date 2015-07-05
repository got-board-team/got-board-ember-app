import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "g",
  territory: Ember.computed("territory", function () {
    return this.territory;
  }),
  svgdragover: function () {
    d3.select(this.element).select(".territory").classed("drop-actived", true);
  },
  svgdragleave: function () {
    d3.select(this.element).select(".territory").classed("drop-actived", false);
  },
  svgdrop: function (event) {
    d3.select(this.element).select(".territory").classed("drop-actived", false);
    var draggedElement = event.draggedElement;
    var x = draggedElement.getAttribute("x");
    var y = draggedElement.getAttribute("y");
    var obj = event.draggedObject;

    this.element.appendChild(draggedElement);

    obj.setProperties({ territory: this.territory, x: x, y: y });
    obj.save();

    console.log(obj.get("type") + ' was dropped into ' + this.territory.id +
                ' at x: ' + obj.get("x") + ' , y: ' + obj.get("y"));
  },
});
