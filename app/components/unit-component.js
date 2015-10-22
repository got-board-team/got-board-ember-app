import Ember from 'ember';
import Draggable from '../mixins/draggable';

export default Ember.Component.extend(Draggable, {
  tagName: "div",
  classNames: ["piece"],
  classNameBindings: ["unit.house", "type"],
  attributeBindings: ["style"],

  unit: function () {
    return this.get("unit");
  }.property("unit"),

  type: function () {
    return this.unit.get("type").toLowerCase();
  }.property("unit.type"),

  style: function () {
    var top = this.unit.get("y");
    var left = this.unit.get("x");
    var style = "top: ${top}px; left: ${left}px;"
    //TODO refactor removing the line bellow when possible to use es6
    //(babel? https://github.com/babel/ember-cli-babel)
    style = style.replace("${top}", top).replace("${left}", left);
    return new Ember.Handlebars.SafeString(style);
  }.property("unit.x", "unit.y"),

  draggedObject: function () {
    return this.unit;
  },

  unitUpdate: function (a, b, c) {
    var data = this.$().data("pusher");
    data.territory_id = data.territory;
    delete data.territory;
    this.unit.setProperties(data);
    (data.territory_id == null) ? this.$().hide() : this.$().show();
  },
});
