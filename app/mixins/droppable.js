import Ember from 'ember';

export default Ember.Mixin.create({
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
      window.droppableElement = self.element;
    });

    d.on("mouseup", function(){
      if (!window.dragging) { return; }
      self._drop();
    });
  }.on("didInsertElement"),

  _drop: function () {
    window.droppableElement = null;
    this.d().classed("drop-actived", false);

    var event = document.createEvent("SVGEvents");
    event.initEvent("drop", true, true);
    this.element.dispatchEvent(event);
  },

});
