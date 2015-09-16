import Ember from 'ember';

var isNotDragging = function (d) {
  return !d.classed('dragging');
};

var updatePosition = function (d, position, diff) {
  var currentPos = parseFloat(d.attr(position)) || 0;
  d.attr(position, currentPos + diff);
};

var LEFT_BUTTON = 1;

export default Ember.Mixin.create({
  attributeBindings: ['draggable'],
  draggable: true,

  initialize: function () {
    var self = this;
    var $draggable = $(this.element).draggabilly({ });

    $draggable.on("dragStart", function () {
      window.dragging = true;
      window.draggedElement = self.element;
      window.draggedObject = self.draggedObject();

      var elm = $(this);
      window.offset = elm.offset();
      elm.css('pointer-events', "none");
      $("body").append(elm);

      //fix position of object on the screen
      elm.offset(window.offset);
    });

    $draggable.on("dragMove", function () {
      var elm = $(this);
      window.offset = elm.offset();
    });

    $draggable.on("dragEnd", function () {
      var elm = $(this);

      //fix position of object on the screen
      elm.offset(window.offset);

      elm.css('pointer-events', "auto");

      window.dragging = false;
      window.draggedElement = null;
      window.draggedObject = null;
    });
  }.on("didInsertElement"),
});
