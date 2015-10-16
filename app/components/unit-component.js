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
    // TODO refactor
    return "top: " + this.unit.get("y") + "px; left: " + this.unit.get("x") + "px;";
  }.property("unit.x", "unit.y"),

  draggedObject: function () {
    return this.unit;
  },

  unitUpdate: function (a, b, c) {
    console.log("unitUpdate");
    var data = this.$().data("pusher");
    data.territory_id = data.territory;
    delete data.territory;
    this.unit.setProperties(data);
    (data.territory_id == null) ? this.$().hide() : this.$().show();
  },
});
