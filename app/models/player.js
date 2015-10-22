import DS from 'ember-data';

export default DS.Model.extend({
  match: DS.belongsTo("match", { async: false }),
  units: DS.hasMany({ async: true }),
  house: DS.attr(),
  availableUnits: function() {
    return this.get("units").filterBy("territory", null).toArray();
  }.property("units.@each.territory"),
});
