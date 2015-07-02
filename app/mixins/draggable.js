import Ember from 'ember';

var isNotDragging = function (d) {
  console.log(d.classed('dragging'));
  return !d.classed('dragging');
};

var updatePosition = function (d, position, diff) {
  var currentPos = parseFloat(d.attr(position)) || 0;
  d.attr(position, currentPos + diff);
};

export default Ember.Mixin.create({
  attributeBindings: ['draggable'],
  draggable: true,

  start: function() {
    var e = d3.event.sourceEvent;
    if (e.buttons === 2) {
      return;
    }
    window.dragging = true;
    d3.select(this).attr('pointer-events', 'none');
    d3.select(this).classed('dragging', true);
  },
  drag: function() {
    var d = d3.select(this);
    if (isNotDragging(d)) { return; }
    var event = d3.event;
    updatePosition(d, "x", event.dx);
    updatePosition(d, "y", event.dy);
  },
  draggedObject: function () {
   return this;
  },
  end: function(self) {
    window.dragging = false;
    var element = self.element;
    d3.select(element).attr('pointer-events', null);

    var event = document.createEvent('SVGEvents');
    event.initEvent('svgdrop', true, true);
    event.dragged = element;

    var x = element.getAttribute("x");
    var y = element.getAttribute("y");

    var obj = self.draggedObject();
    obj.setProperties({ x: x, y: y });
    obj.save();

    if (window.droppable) {
      window.droppable.dispatchEvent(event);
    }

    d3.select(element).classed('dragging', false);
  },

  initialize: function () {
    var self = this;
    var dragBehavior = d3.behavior.drag()
      .on("dragstart", this.start)
      .on("drag", this.drag)
      .on("dragend", function () { self.end(self); });

    d3.select(this.element).call(dragBehavior);
  }.on("didInsertElement"),
});
