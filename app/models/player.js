/* global Ember:false */
import DS from 'ember-data';

let computed = Ember.computed;

export default DS.Model.extend({
  match: DS.belongsTo("match", { async: false }),
  units: DS.hasMany(),
  orderTokens: DS.hasMany(),
  house: DS.attr(),
  availableUnits: computed("units.@each.territory", function() {
    return this.get("units").filterBy("territory", null).toArray();
  }),
  availableOrderTokens: computed("orderTokens.@each.territory", function() {
    return this.get("orderTokens").filterBy("territory", null).toArray();
  }),
});
