import DS from 'ember-data';

export default DS.Model.extend({
  match: DS.belongsTo("match", { async: false }),
  territories: DS.hasMany("territories", { async: false }),
});
