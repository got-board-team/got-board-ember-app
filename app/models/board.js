import DS from 'ember-data';

export default DS.Model.extend({
  match: DS.belongsTo("match"),
  map: DS.belongsTo("map", { embedded: true }),
});
