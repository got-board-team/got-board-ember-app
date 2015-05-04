import DS from 'ember-data';

export default DS.Model.extend({
  board: DS.belongsTo("match"),
});
