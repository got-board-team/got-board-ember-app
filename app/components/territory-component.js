import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "g",
  attributeBindings: ["data-slug"],
  "data-slug": function() {
    return this.territory.get("slug");
  }.property('territory.slug'),

  svgdragover: function () {
    d3.select(this.element).select(".territory").classed("drop-actived", true);
  },
  svgdragleave: function () {
    d3.select(this.element).select(".territory").classed("drop-actived", false);
  },
  svgdrop: function (event) {
    d3.select(this.element).select(".territory").classed("drop-actived", false);
    var dragged = event.dragged;
    this.element.appendChild(event.dragged);
    console.log(dragged +
                ' was dropped into ' +
                this.territory.get("slug") +
                ' at x: ' + dragged.getAttribute("x") +
                ' , y: ' + dragged.getAttribute("y")
               );
  },
});
