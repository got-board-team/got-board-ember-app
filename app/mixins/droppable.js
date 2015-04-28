import Ember from 'ember';

export default Ember.Mixin.create({
  initialize: function () { 
    var self = this;

    d3.select(this.element).on("mouseout", function(){
      if (!window.dragging) { return; }
      var event = document.createEvent('SVGEvents');
      event.initEvent('svgdragleave', true, true);
      this.dispatchEvent(event);
    });

    d3.select(this.element).on("mouseover", function(){
      if (!window.dragging) { return; }
      var event = document.createEvent('SVGEvents');
      event.initEvent('svgdragover', true, true);
      this.dispatchEvent(event);
    });

    d3.select(this.element).on("svgdragover", function(){
      window.droppable = this;
      self.svgdragover(d3.event);
    });

    d3.select(this.element).on("svgdragleave", function(){
      self.svgdragleave(d3.event);
    });

    d3.select(this.element).on("svgdrop", function(){
      window.droppable = null;
      self.svgdrop(d3.event);
    });
  }.on("didInsertElement"),
});
