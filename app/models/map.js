import DS from 'ember-data';

export default DS.Model.extend({
  territories: DS.hasMany({ async: true }),
});
