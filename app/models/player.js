/* global Ember:false */
import DS from 'ember-data';

let computed = Ember.computed;

export default DS.Model.extend({
  match: DS.belongsTo("match", { async: false }),
  units: DS.hasMany(),
  orderTokens: DS.hasMany(),
  powerTokens: DS.hasMany(),
  houseCards: DS.hasMany(),
  house: DS.attr(),
  userId: DS.attr(),
  supplyPosition: DS.attr(),

  availableUnits: computed("units.@each.territory", function() {
    return this.get("units").filterBy("territory", null).toArray();
  }),
  availableOrderTokens: computed("orderTokens.@each.territory", function() {
    return this.get("orderTokens").filterBy("territory", null).toArray();
  }),
  availablePowerTokens: computed("powerTokens.@each.territory", function() {
    return this.get("powerTokens").filterBy("territory", null).toArray();
  }),
})
.pusherable("player");
