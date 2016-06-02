import DS from 'ember-data';

export default DS.Model.extend({
  territory: DS.belongsTo('territory', { async: false }),
  match: DS.belongsTo({ async: false }),
  name: DS.attr('string'),
  x: DS.attr('number'),
  y: DS.attr('number')
});
