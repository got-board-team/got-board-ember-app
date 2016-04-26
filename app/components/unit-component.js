import Ember from 'ember';
import Draggable from '../mixins/draggable';

const { computed } = Ember;

export default Ember.Component.extend(Draggable, {
  tagName: "div",
  classNames: ["piece"],
  classNameBindings: ["unit.house", "type"],
  attributeBindings: ["id", "style"],

  id: computed(function() {
    let id = this.get("unit.id");
    return `unit-${id}`;
  }),

  unit: computed(function() {
    return this.get("unit");
  }),

  type: computed(function() {
    let type = this.get("unit.type");
    return Ember.String.dasherize(type).toLowerCase();
  }),

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
