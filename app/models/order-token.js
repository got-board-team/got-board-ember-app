import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  territory: belongsTo("territory", { async: false }),
  board: belongsTo({ async: false }),
  player: belongsTo({ async: false }),
  type: attr(),
  x: attr("number"),
  y: attr("number"),
  faceup: attr("boolean"),
  house: Ember.computed("player", function() {
    return this.get("player.house").toLowerCase();
  }),
});
