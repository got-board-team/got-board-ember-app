import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  board: belongsTo({ async: false }),
  player: belongsTo({ async: false }),
  name: attr(),
  x: attr("number"),
  y: attr("number"),
  faceup: attr("boolean"),
  discartedAt: attr("date"),
  house: Ember.computed("player", function() {
    return this.get("player.house").toLowerCase();
  }),
})
.pusherable("house_card");
