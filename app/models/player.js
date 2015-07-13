import DS from 'ember-data';

export default DS.Model.extend({
  match: DS.belongsTo("match"),
  units: DS.hasMany({ async: true }),
  house: DS.attr(),
  availableUnits: function() {
    console.log("player.availableUnits");
    return this.get("units").filterBy("territory", "");
  }.property("units.@each"),
});
