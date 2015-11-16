import DS from 'ember-data';

const { belongsTo, hasMany, attr } = DS;

export default DS.Model.extend({
  board: belongsTo("board", { async: false }),
  path: attr(),
  units: DS.hasMany(),
  orderTokens: hasMany(),
  powerTokens: hasMany(),
});
