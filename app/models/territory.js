import DS from 'ember-data';

let attr = DS.attr;

let Territory = DS.Model.extend({
  map: DS.belongsTo("board", { async: false }),
  slug: attr(),
  path: attr(),
  units: DS.hasMany({ async: true }),
  orderTokens: DS.hasMany({ async: true }),
});

export default Territory;
