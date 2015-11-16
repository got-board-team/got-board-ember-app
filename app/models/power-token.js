import Ember from 'ember';
import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  board: belongsTo({ async: false }),
  player: belongsTo({ async: false }),
  territory: belongsTo("territory", { async: false }),
  x: attr("number"),
  y: attr("number"),

  house: Ember.computed("player", function() {
    return this.get("player.house").toLowerCase();
  }),
})
.pusherable("power_token");

