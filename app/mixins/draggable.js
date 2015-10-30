import Ember from 'ember';

export default Ember.Mixin.create({
  attributeBindings: ['draggable'],
  draggable: true,

  initialize: function () {
    var self = this;
    var $draggable = $(this.element).draggabilly({ });

    $draggable.on("dragStart", function () {
      window.dragging = true;
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
      window.draggedObject = null;
    });
  }.on("didInsertElement"),
});
