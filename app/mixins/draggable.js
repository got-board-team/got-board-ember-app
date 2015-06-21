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
  end: function() {
    window.dragging = false;
    d3.select(this).attr('pointer-events', null);
    var event = document.createEvent('SVGEvents');
    event.initEvent('svgdrop', true, true);
    event.dragged = this;
    if (window.droppable) {
      window.droppable.dispatchEvent(event);
    }
    d3.select(this).classed('dragging', false);
  },

  initialize: function () {
    var dragBehavior = d3.behavior.drag()
      .on("dragstart", this.start)
      .on("drag", this.drag)
      .on("dragend", this.end);

    d3.select(this.element).call(dragBehavior);
  }.on("didInsertElement"),
});
