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
    });

    d.on("mouseup", function(){
      if (!window.dragging) { return; }
      d.classed("drop-actived", false);
      self.drop();
    });
  }.on("didInsertElement"),
});
